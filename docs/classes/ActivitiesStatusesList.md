[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesStatusesList

# Class: ActivitiesStatusesList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.ActivitiesStatusesList

## Hierarchy

- `Message`\<[`ActivitiesStatusesList`](ActivitiesStatusesList.md)\>

  ↳ **`ActivitiesStatusesList`**

## Table of contents

### Constructors

- [constructor](ActivitiesStatusesList.md#constructor)

### Properties

- [list](ActivitiesStatusesList.md#list)
- [fields](ActivitiesStatusesList.md#fields)
- [runtime](ActivitiesStatusesList.md#runtime)
- [typeName](ActivitiesStatusesList.md#typename)

### Methods

- [clone](ActivitiesStatusesList.md#clone)
- [equals](ActivitiesStatusesList.md#equals)
- [fromBinary](ActivitiesStatusesList.md#frombinary)
- [fromJson](ActivitiesStatusesList.md#fromjson)
- [fromJsonString](ActivitiesStatusesList.md#fromjsonstring)
- [getType](ActivitiesStatusesList.md#gettype)
- [toBinary](ActivitiesStatusesList.md#tobinary)
- [toJSON](ActivitiesStatusesList.md#tojson)
- [toJson](ActivitiesStatusesList.md#tojson-1)
- [toJsonString](ActivitiesStatusesList.md#tojsonstring)
- [equals](ActivitiesStatusesList.md#equals-1)
- [fromBinary](ActivitiesStatusesList.md#frombinary-1)
- [fromJson](ActivitiesStatusesList.md#fromjson-1)
- [fromJsonString](ActivitiesStatusesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesStatusesList**(`data?`): [`ActivitiesStatusesList`](ActivitiesStatusesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesStatusesList`](ActivitiesStatusesList.md)\> |

#### Returns

[`ActivitiesStatusesList`](ActivitiesStatusesList.md)

#### Overrides

Message\&lt;ActivitiesStatusesList\&gt;.constructor

#### Defined in

src/activities_statuses.scailo_pb.ts:393

## Properties

### list

• **list**: [`ActivityStatus`](ActivityStatus.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ActivityStatus list = 1;

#### Defined in

src/activities_statuses.scailo_pb.ts:391

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_statuses.scailo_pb.ts:400

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_statuses.scailo_pb.ts:398

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesStatusesList"``

#### Defined in

src/activities_statuses.scailo_pb.ts:399

## Methods

### clone

▸ **clone**(): [`ActivitiesStatusesList`](ActivitiesStatusesList.md)

Create a deep copy.

#### Returns

[`ActivitiesStatusesList`](ActivitiesStatusesList.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`ActivitiesStatusesList`](ActivitiesStatusesList.md) \| `PlainMessage`\<[`ActivitiesStatusesList`](ActivitiesStatusesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`ActivitiesStatusesList`](ActivitiesStatusesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesStatusesList`](ActivitiesStatusesList.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`ActivitiesStatusesList`](ActivitiesStatusesList.md) \| `PlainMessage`\<[`ActivitiesStatusesList`](ActivitiesStatusesList.md)\> |
| `b` | `undefined` \| [`ActivitiesStatusesList`](ActivitiesStatusesList.md) \| `PlainMessage`\<[`ActivitiesStatusesList`](ActivitiesStatusesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_statuses.scailo_pb.ts:416

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesStatusesList`](ActivitiesStatusesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesStatusesList`](ActivitiesStatusesList.md)

#### Defined in

src/activities_statuses.scailo_pb.ts:404

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesStatusesList`](ActivitiesStatusesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesList`](ActivitiesStatusesList.md)

#### Defined in

src/activities_statuses.scailo_pb.ts:408

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesStatusesList`](ActivitiesStatusesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesList`](ActivitiesStatusesList.md)

#### Defined in

src/activities_statuses.scailo_pb.ts:412

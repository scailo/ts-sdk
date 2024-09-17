[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesGroupsList

# Class: ActivitiesGroupsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.ActivitiesGroupsList

## Hierarchy

- `Message`\<[`ActivitiesGroupsList`](ActivitiesGroupsList.md)\>

  ↳ **`ActivitiesGroupsList`**

## Table of contents

### Constructors

- [constructor](ActivitiesGroupsList.md#constructor)

### Properties

- [list](ActivitiesGroupsList.md#list)
- [fields](ActivitiesGroupsList.md#fields)
- [runtime](ActivitiesGroupsList.md#runtime)
- [typeName](ActivitiesGroupsList.md#typename)

### Methods

- [clone](ActivitiesGroupsList.md#clone)
- [equals](ActivitiesGroupsList.md#equals)
- [fromBinary](ActivitiesGroupsList.md#frombinary)
- [fromJson](ActivitiesGroupsList.md#fromjson)
- [fromJsonString](ActivitiesGroupsList.md#fromjsonstring)
- [getType](ActivitiesGroupsList.md#gettype)
- [toBinary](ActivitiesGroupsList.md#tobinary)
- [toJSON](ActivitiesGroupsList.md#tojson)
- [toJson](ActivitiesGroupsList.md#tojson-1)
- [toJsonString](ActivitiesGroupsList.md#tojsonstring)
- [equals](ActivitiesGroupsList.md#equals-1)
- [fromBinary](ActivitiesGroupsList.md#frombinary-1)
- [fromJson](ActivitiesGroupsList.md#fromjson-1)
- [fromJsonString](ActivitiesGroupsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesGroupsList**(`data?`): [`ActivitiesGroupsList`](ActivitiesGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesGroupsList`](ActivitiesGroupsList.md)\> |

#### Returns

[`ActivitiesGroupsList`](ActivitiesGroupsList.md)

#### Overrides

Message\&lt;ActivitiesGroupsList\&gt;.constructor

#### Defined in

src/activities_groups.scailo_pb.ts:385

## Properties

### list

• **list**: [`ActivityGroup`](ActivityGroup.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ActivityGroup list = 1;

#### Defined in

src/activities_groups.scailo_pb.ts:383

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_groups.scailo_pb.ts:392

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_groups.scailo_pb.ts:390

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesGroupsList"``

#### Defined in

src/activities_groups.scailo_pb.ts:391

## Methods

### clone

▸ **clone**(): [`ActivitiesGroupsList`](ActivitiesGroupsList.md)

Create a deep copy.

#### Returns

[`ActivitiesGroupsList`](ActivitiesGroupsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesGroupsList`](ActivitiesGroupsList.md) \| `PlainMessage`\<[`ActivitiesGroupsList`](ActivitiesGroupsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesGroupsList`](ActivitiesGroupsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesGroupsList`](ActivitiesGroupsList.md)\>

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
| `a` | `undefined` \| [`ActivitiesGroupsList`](ActivitiesGroupsList.md) \| `PlainMessage`\<[`ActivitiesGroupsList`](ActivitiesGroupsList.md)\> |
| `b` | `undefined` \| [`ActivitiesGroupsList`](ActivitiesGroupsList.md) \| `PlainMessage`\<[`ActivitiesGroupsList`](ActivitiesGroupsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_groups.scailo_pb.ts:408

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesGroupsList`](ActivitiesGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesGroupsList`](ActivitiesGroupsList.md)

#### Defined in

src/activities_groups.scailo_pb.ts:396

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesGroupsList`](ActivitiesGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsList`](ActivitiesGroupsList.md)

#### Defined in

src/activities_groups.scailo_pb.ts:400

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesGroupsList`](ActivitiesGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsList`](ActivitiesGroupsList.md)

#### Defined in

src/activities_groups.scailo_pb.ts:404

[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesList

# Class: ActivitiesList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.ActivitiesList

## Hierarchy

- `Message`\<[`ActivitiesList`](ActivitiesList.md)\>

  ↳ **`ActivitiesList`**

## Table of contents

### Constructors

- [constructor](ActivitiesList.md#constructor)

### Properties

- [list](ActivitiesList.md#list)
- [fields](ActivitiesList.md#fields)
- [runtime](ActivitiesList.md#runtime)
- [typeName](ActivitiesList.md#typename)

### Methods

- [clone](ActivitiesList.md#clone)
- [equals](ActivitiesList.md#equals)
- [fromBinary](ActivitiesList.md#frombinary)
- [fromJson](ActivitiesList.md#fromjson)
- [fromJsonString](ActivitiesList.md#fromjsonstring)
- [getType](ActivitiesList.md#gettype)
- [toBinary](ActivitiesList.md#tobinary)
- [toJSON](ActivitiesList.md#tojson)
- [toJson](ActivitiesList.md#tojson-1)
- [toJsonString](ActivitiesList.md#tojsonstring)
- [equals](ActivitiesList.md#equals-1)
- [fromBinary](ActivitiesList.md#frombinary-1)
- [fromJson](ActivitiesList.md#fromjson-1)
- [fromJsonString](ActivitiesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesList**(`data?`): [`ActivitiesList`](ActivitiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesList`](ActivitiesList.md)\> |

#### Returns

[`ActivitiesList`](ActivitiesList.md)

#### Overrides

Message\&lt;ActivitiesList\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:764

## Properties

### list

• **list**: [`Activity`](Activity.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Activity list = 1;

#### Defined in

src/activities.scailo_pb.ts:762

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:771

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:769

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesList"``

#### Defined in

src/activities.scailo_pb.ts:770

## Methods

### clone

▸ **clone**(): [`ActivitiesList`](ActivitiesList.md)

Create a deep copy.

#### Returns

[`ActivitiesList`](ActivitiesList.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesList`](ActivitiesList.md) \| `PlainMessage`\<[`ActivitiesList`](ActivitiesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesList`](ActivitiesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesList`](ActivitiesList.md)\>

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
| `a` | `undefined` \| [`ActivitiesList`](ActivitiesList.md) \| `PlainMessage`\<[`ActivitiesList`](ActivitiesList.md)\> |
| `b` | `undefined` \| [`ActivitiesList`](ActivitiesList.md) \| `PlainMessage`\<[`ActivitiesList`](ActivitiesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:787

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesList`](ActivitiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesList`](ActivitiesList.md)

#### Defined in

src/activities.scailo_pb.ts:775

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesList`](ActivitiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesList`](ActivitiesList.md)

#### Defined in

src/activities.scailo_pb.ts:779

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesList`](ActivitiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesList`](ActivitiesList.md)

#### Defined in

src/activities.scailo_pb.ts:783

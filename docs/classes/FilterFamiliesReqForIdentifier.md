[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FilterFamiliesReqForIdentifier

# Class: FilterFamiliesReqForIdentifier

Describes the parameters that are required to filter the prospective families for a record represented by the given UUID

**`Generated`**

from message Scailo.FilterFamiliesReqForIdentifier

## Hierarchy

- `Message`\<[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)\>

  ↳ **`FilterFamiliesReqForIdentifier`**

## Table of contents

### Constructors

- [constructor](FilterFamiliesReqForIdentifier.md#constructor)

### Properties

- [filter](FilterFamiliesReqForIdentifier.md#filter)
- [uuid](FilterFamiliesReqForIdentifier.md#uuid)
- [fields](FilterFamiliesReqForIdentifier.md#fields)
- [runtime](FilterFamiliesReqForIdentifier.md#runtime)
- [typeName](FilterFamiliesReqForIdentifier.md#typename)

### Methods

- [clone](FilterFamiliesReqForIdentifier.md#clone)
- [equals](FilterFamiliesReqForIdentifier.md#equals)
- [fromBinary](FilterFamiliesReqForIdentifier.md#frombinary)
- [fromJson](FilterFamiliesReqForIdentifier.md#fromjson)
- [fromJsonString](FilterFamiliesReqForIdentifier.md#fromjsonstring)
- [getType](FilterFamiliesReqForIdentifier.md#gettype)
- [toBinary](FilterFamiliesReqForIdentifier.md#tobinary)
- [toJSON](FilterFamiliesReqForIdentifier.md#tojson)
- [toJson](FilterFamiliesReqForIdentifier.md#tojson-1)
- [toJsonString](FilterFamiliesReqForIdentifier.md#tojsonstring)
- [equals](FilterFamiliesReqForIdentifier.md#equals-1)
- [fromBinary](FilterFamiliesReqForIdentifier.md#frombinary-1)
- [fromJson](FilterFamiliesReqForIdentifier.md#fromjson-1)
- [fromJsonString](FilterFamiliesReqForIdentifier.md#fromjsonstring-1)

## Constructors

### constructor

• **new FilterFamiliesReqForIdentifier**(`data?`): [`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)\> |

#### Returns

[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)

#### Overrides

Message\&lt;FilterFamiliesReqForIdentifier\&gt;.constructor

#### Defined in

src/families.scailo_pb.ts:1789

## Properties

### filter

• `Optional` **filter**: [`FamiliesServiceFilterReq`](FamiliesServiceFilterReq.md)

The families filter to apply

**`Generated`**

from field: Scailo.FamiliesServiceFilterReq filter = 10;

#### Defined in

src/families.scailo_pb.ts:1787

___

### uuid

• **uuid**: `string` = `""`

UUID of the resource

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/families.scailo_pb.ts:1780

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:1796

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:1794

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FilterFamiliesReqForIdentifier"``

#### Defined in

src/families.scailo_pb.ts:1795

## Methods

### clone

▸ **clone**(): [`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)

Create a deep copy.

#### Returns

[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)

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
| `other` | `undefined` \| ``null`` \| [`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md) \| `PlainMessage`\<[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)\> |

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

▸ **getType**(): `MessageType`\<[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)\>

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
| `a` | `undefined` \| [`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md) \| `PlainMessage`\<[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)\> |
| `b` | `undefined` \| [`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md) \| `PlainMessage`\<[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)\> |

#### Returns

`boolean`

#### Defined in

src/families.scailo_pb.ts:1813

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)

#### Defined in

src/families.scailo_pb.ts:1801

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)

#### Defined in

src/families.scailo_pb.ts:1805

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FilterFamiliesReqForIdentifier`](FilterFamiliesReqForIdentifier.md)

#### Defined in

src/families.scailo_pb.ts:1809

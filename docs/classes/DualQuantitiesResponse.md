[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DualQuantitiesResponse

# Class: DualQuantitiesResponse

Describes the dual quantity response. Primary quantity represents quantity in internal UoM and secondary quantity represents quantity in either vendor UoM or client UoM, depending on the context

**`Generated`**

from message Scailo.DualQuantitiesResponse

## Hierarchy

- `Message`\<[`DualQuantitiesResponse`](DualQuantitiesResponse.md)\>

  ↳ **`DualQuantitiesResponse`**

## Table of contents

### Constructors

- [constructor](DualQuantitiesResponse.md#constructor)

### Properties

- [primaryQuantity](DualQuantitiesResponse.md#primaryquantity)
- [secondaryQuantity](DualQuantitiesResponse.md#secondaryquantity)
- [fields](DualQuantitiesResponse.md#fields)
- [runtime](DualQuantitiesResponse.md#runtime)
- [typeName](DualQuantitiesResponse.md#typename)

### Methods

- [clone](DualQuantitiesResponse.md#clone)
- [equals](DualQuantitiesResponse.md#equals)
- [fromBinary](DualQuantitiesResponse.md#frombinary)
- [fromJson](DualQuantitiesResponse.md#fromjson)
- [fromJsonString](DualQuantitiesResponse.md#fromjsonstring)
- [getType](DualQuantitiesResponse.md#gettype)
- [toBinary](DualQuantitiesResponse.md#tobinary)
- [toJSON](DualQuantitiesResponse.md#tojson)
- [toJson](DualQuantitiesResponse.md#tojson-1)
- [toJsonString](DualQuantitiesResponse.md#tojsonstring)
- [equals](DualQuantitiesResponse.md#equals-1)
- [fromBinary](DualQuantitiesResponse.md#frombinary-1)
- [fromJson](DualQuantitiesResponse.md#fromjson-1)
- [fromJsonString](DualQuantitiesResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new DualQuantitiesResponse**(`data?`): [`DualQuantitiesResponse`](DualQuantitiesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DualQuantitiesResponse`](DualQuantitiesResponse.md)\> |

#### Returns

[`DualQuantitiesResponse`](DualQuantitiesResponse.md)

#### Overrides

Message\&lt;DualQuantitiesResponse\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:1769

## Properties

### primaryQuantity

• **primaryQuantity**: `bigint` = `protoInt64.zero`

Quantity in internal UoM

**`Generated`**

from field: uint64 primary_quantity = 1;

#### Defined in

src/base.scailo_pb.ts:1760

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Quantity in either vendor or client UoM

**`Generated`**

from field: uint64 secondary_quantity = 2;

#### Defined in

src/base.scailo_pb.ts:1767

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:1776

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:1774

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DualQuantitiesResponse"``

#### Defined in

src/base.scailo_pb.ts:1775

## Methods

### clone

▸ **clone**(): [`DualQuantitiesResponse`](DualQuantitiesResponse.md)

Create a deep copy.

#### Returns

[`DualQuantitiesResponse`](DualQuantitiesResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`DualQuantitiesResponse`](DualQuantitiesResponse.md) \| `PlainMessage`\<[`DualQuantitiesResponse`](DualQuantitiesResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`DualQuantitiesResponse`](DualQuantitiesResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DualQuantitiesResponse`](DualQuantitiesResponse.md)\>

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
| `a` | `undefined` \| [`DualQuantitiesResponse`](DualQuantitiesResponse.md) \| `PlainMessage`\<[`DualQuantitiesResponse`](DualQuantitiesResponse.md)\> |
| `b` | `undefined` \| [`DualQuantitiesResponse`](DualQuantitiesResponse.md) \| `PlainMessage`\<[`DualQuantitiesResponse`](DualQuantitiesResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:1793

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DualQuantitiesResponse`](DualQuantitiesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DualQuantitiesResponse`](DualQuantitiesResponse.md)

#### Defined in

src/base.scailo_pb.ts:1781

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DualQuantitiesResponse`](DualQuantitiesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DualQuantitiesResponse`](DualQuantitiesResponse.md)

#### Defined in

src/base.scailo_pb.ts:1785

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DualQuantitiesResponse`](DualQuantitiesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DualQuantitiesResponse`](DualQuantitiesResponse.md)

#### Defined in

src/base.scailo_pb.ts:1789

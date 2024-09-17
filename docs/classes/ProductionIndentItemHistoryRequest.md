[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentItemHistoryRequest

# Class: ProductionIndentItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.ProductionIndentItemHistoryRequest

## Hierarchy

- `Message`\<[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)\>

  ↳ **`ProductionIndentItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](ProductionIndentItemHistoryRequest.md#constructor)

### Properties

- [familyId](ProductionIndentItemHistoryRequest.md#familyid)
- [productionIndentId](ProductionIndentItemHistoryRequest.md#productionindentid)
- [fields](ProductionIndentItemHistoryRequest.md#fields)
- [runtime](ProductionIndentItemHistoryRequest.md#runtime)
- [typeName](ProductionIndentItemHistoryRequest.md#typename)

### Methods

- [clone](ProductionIndentItemHistoryRequest.md#clone)
- [equals](ProductionIndentItemHistoryRequest.md#equals)
- [fromBinary](ProductionIndentItemHistoryRequest.md#frombinary)
- [fromJson](ProductionIndentItemHistoryRequest.md#fromjson)
- [fromJsonString](ProductionIndentItemHistoryRequest.md#fromjsonstring)
- [getType](ProductionIndentItemHistoryRequest.md#gettype)
- [toBinary](ProductionIndentItemHistoryRequest.md#tobinary)
- [toJSON](ProductionIndentItemHistoryRequest.md#tojson)
- [toJson](ProductionIndentItemHistoryRequest.md#tojson-1)
- [toJsonString](ProductionIndentItemHistoryRequest.md#tojsonstring)
- [equals](ProductionIndentItemHistoryRequest.md#equals-1)
- [fromBinary](ProductionIndentItemHistoryRequest.md#frombinary-1)
- [fromJson](ProductionIndentItemHistoryRequest.md#fromjson-1)
- [fromJsonString](ProductionIndentItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentItemHistoryRequest**(`data?`): [`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)\> |

#### Returns

[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)

#### Overrides

Message\&lt;ProductionIndentItemHistoryRequest\&gt;.constructor

#### Defined in

src/production_indents.scailo_pb.ts:979

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/production_indents.scailo_pb.ts:977

___

### productionIndentId

• **productionIndentId**: `bigint` = `protoInt64.zero`

Stores the production indent ID

**`Generated`**

from field: uint64 production_indent_id = 10;

#### Defined in

src/production_indents.scailo_pb.ts:970

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_indents.scailo_pb.ts:986

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_indents.scailo_pb.ts:984

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentItemHistoryRequest"``

#### Defined in

src/production_indents.scailo_pb.ts:985

## Methods

### clone

▸ **clone**(): [`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md) \| `PlainMessage`\<[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md) \| `PlainMessage`\<[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md) \| `PlainMessage`\<[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_indents.scailo_pb.ts:1003

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:991

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:995

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItemHistoryRequest`](ProductionIndentItemHistoryRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:999

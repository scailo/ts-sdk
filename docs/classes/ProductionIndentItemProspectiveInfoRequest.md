[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentItemProspectiveInfoRequest

# Class: ProductionIndentItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective production indent item

**`Generated`**

from message Scailo.ProductionIndentItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)\>

  ↳ **`ProductionIndentItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](ProductionIndentItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](ProductionIndentItemProspectiveInfoRequest.md#familyid)
- [productionIndentId](ProductionIndentItemProspectiveInfoRequest.md#productionindentid)
- [fields](ProductionIndentItemProspectiveInfoRequest.md#fields)
- [runtime](ProductionIndentItemProspectiveInfoRequest.md#runtime)
- [typeName](ProductionIndentItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](ProductionIndentItemProspectiveInfoRequest.md#clone)
- [equals](ProductionIndentItemProspectiveInfoRequest.md#equals)
- [fromBinary](ProductionIndentItemProspectiveInfoRequest.md#frombinary)
- [fromJson](ProductionIndentItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](ProductionIndentItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](ProductionIndentItemProspectiveInfoRequest.md#gettype)
- [toBinary](ProductionIndentItemProspectiveInfoRequest.md#tobinary)
- [toJSON](ProductionIndentItemProspectiveInfoRequest.md#tojson)
- [toJson](ProductionIndentItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](ProductionIndentItemProspectiveInfoRequest.md#tojsonstring)
- [equals](ProductionIndentItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](ProductionIndentItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](ProductionIndentItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](ProductionIndentItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentItemProspectiveInfoRequest**(`data?`): [`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)\> |

#### Returns

[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;ProductionIndentItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/production_indents.scailo_pb.ts:1029

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/production_indents.scailo_pb.ts:1027

___

### productionIndentId

• **productionIndentId**: `bigint` = `protoInt64.zero`

Stores the production indent ID

**`Generated`**

from field: uint64 production_indent_id = 10;

#### Defined in

src/production_indents.scailo_pb.ts:1020

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_indents.scailo_pb.ts:1036

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_indents.scailo_pb.ts:1034

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentItemProspectiveInfoRequest"``

#### Defined in

src/production_indents.scailo_pb.ts:1035

## Methods

### clone

▸ **clone**(): [`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_indents.scailo_pb.ts:1053

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:1041

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:1045

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentItemProspectiveInfoRequest`](ProductionIndentItemProspectiveInfoRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:1049

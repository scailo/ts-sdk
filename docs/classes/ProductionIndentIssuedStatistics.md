[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentIssuedStatistics

# Class: ProductionIndentIssuedStatistics

Describes the issued statistics of the production indent

**`Generated`**

from message Scailo.ProductionIndentIssuedStatistics

## Hierarchy

- `Message`\<[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)\>

  ↳ **`ProductionIndentIssuedStatistics`**

## Table of contents

### Constructors

- [constructor](ProductionIndentIssuedStatistics.md#constructor)

### Properties

- [approvedIssuedQuantity](ProductionIndentIssuedStatistics.md#approvedissuedquantity)
- [familyId](ProductionIndentIssuedStatistics.md#familyid)
- [indentedQuantity](ProductionIndentIssuedStatistics.md#indentedquantity)
- [unapprovedIssuedQuantity](ProductionIndentIssuedStatistics.md#unapprovedissuedquantity)
- [fields](ProductionIndentIssuedStatistics.md#fields)
- [runtime](ProductionIndentIssuedStatistics.md#runtime)
- [typeName](ProductionIndentIssuedStatistics.md#typename)

### Methods

- [clone](ProductionIndentIssuedStatistics.md#clone)
- [equals](ProductionIndentIssuedStatistics.md#equals)
- [fromBinary](ProductionIndentIssuedStatistics.md#frombinary)
- [fromJson](ProductionIndentIssuedStatistics.md#fromjson)
- [fromJsonString](ProductionIndentIssuedStatistics.md#fromjsonstring)
- [getType](ProductionIndentIssuedStatistics.md#gettype)
- [toBinary](ProductionIndentIssuedStatistics.md#tobinary)
- [toJSON](ProductionIndentIssuedStatistics.md#tojson)
- [toJson](ProductionIndentIssuedStatistics.md#tojson-1)
- [toJsonString](ProductionIndentIssuedStatistics.md#tojsonstring)
- [equals](ProductionIndentIssuedStatistics.md#equals-1)
- [fromBinary](ProductionIndentIssuedStatistics.md#frombinary-1)
- [fromJson](ProductionIndentIssuedStatistics.md#fromjson-1)
- [fromJsonString](ProductionIndentIssuedStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentIssuedStatistics**(`data?`): [`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)\> |

#### Returns

[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)

#### Overrides

Message\&lt;ProductionIndentIssuedStatistics\&gt;.constructor

#### Defined in

src/production_indents.scailo_pb.ts:2051

## Properties

### approvedIssuedQuantity

• **approvedIssuedQuantity**: `bigint` = `protoInt64.zero`

Stores the approved issued quantity

**`Generated`**

from field: uint64 approved_issued_quantity = 4;

#### Defined in

src/production_indents.scailo_pb.ts:2049

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/production_indents.scailo_pb.ts:2028

___

### indentedQuantity

• **indentedQuantity**: `bigint` = `protoInt64.zero`

Stores the indented quantity

**`Generated`**

from field: uint64 indented_quantity = 2;

#### Defined in

src/production_indents.scailo_pb.ts:2035

___

### unapprovedIssuedQuantity

• **unapprovedIssuedQuantity**: `bigint` = `protoInt64.zero`

Stores the unapproved issued quantity

**`Generated`**

from field: uint64 unapproved_issued_quantity = 3;

#### Defined in

src/production_indents.scailo_pb.ts:2042

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_indents.scailo_pb.ts:2058

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_indents.scailo_pb.ts:2056

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentIssuedStatistics"``

#### Defined in

src/production_indents.scailo_pb.ts:2057

## Methods

### clone

▸ **clone**(): [`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)

Create a deep copy.

#### Returns

[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md) \| `PlainMessage`\<[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)\>

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
| `a` | `undefined` \| [`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md) \| `PlainMessage`\<[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)\> |
| `b` | `undefined` \| [`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md) \| `PlainMessage`\<[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_indents.scailo_pb.ts:2077

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)

#### Defined in

src/production_indents.scailo_pb.ts:2065

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)

#### Defined in

src/production_indents.scailo_pb.ts:2069

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentIssuedStatistics`](ProductionIndentIssuedStatistics.md)

#### Defined in

src/production_indents.scailo_pb.ts:2073

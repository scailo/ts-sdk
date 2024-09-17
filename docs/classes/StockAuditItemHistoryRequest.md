[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditItemHistoryRequest

# Class: StockAuditItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.StockAuditItemHistoryRequest

## Hierarchy

- `Message`\<[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)\>

  ↳ **`StockAuditItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](StockAuditItemHistoryRequest.md#constructor)

### Properties

- [familyId](StockAuditItemHistoryRequest.md#familyid)
- [stockAuditId](StockAuditItemHistoryRequest.md#stockauditid)
- [fields](StockAuditItemHistoryRequest.md#fields)
- [runtime](StockAuditItemHistoryRequest.md#runtime)
- [typeName](StockAuditItemHistoryRequest.md#typename)

### Methods

- [clone](StockAuditItemHistoryRequest.md#clone)
- [equals](StockAuditItemHistoryRequest.md#equals)
- [fromBinary](StockAuditItemHistoryRequest.md#frombinary)
- [fromJson](StockAuditItemHistoryRequest.md#fromjson)
- [fromJsonString](StockAuditItemHistoryRequest.md#fromjsonstring)
- [getType](StockAuditItemHistoryRequest.md#gettype)
- [toBinary](StockAuditItemHistoryRequest.md#tobinary)
- [toJSON](StockAuditItemHistoryRequest.md#tojson)
- [toJson](StockAuditItemHistoryRequest.md#tojson-1)
- [toJsonString](StockAuditItemHistoryRequest.md#tojsonstring)
- [equals](StockAuditItemHistoryRequest.md#equals-1)
- [fromBinary](StockAuditItemHistoryRequest.md#frombinary-1)
- [fromJson](StockAuditItemHistoryRequest.md#fromjson-1)
- [fromJsonString](StockAuditItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditItemHistoryRequest**(`data?`): [`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)\> |

#### Returns

[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)

#### Overrides

Message\&lt;StockAuditItemHistoryRequest\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:893

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/stock_audits.scailo_pb.ts:891

___

### stockAuditId

• **stockAuditId**: `bigint` = `protoInt64.zero`

Stores the stock audit ID

**`Generated`**

from field: uint64 stock_audit_id = 10;

#### Defined in

src/stock_audits.scailo_pb.ts:884

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:900

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:898

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditItemHistoryRequest"``

#### Defined in

src/stock_audits.scailo_pb.ts:899

## Methods

### clone

▸ **clone**(): [`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md) \| `PlainMessage`\<[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md) \| `PlainMessage`\<[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md) \| `PlainMessage`\<[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:917

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:905

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:909

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditItemHistoryRequest`](StockAuditItemHistoryRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:913

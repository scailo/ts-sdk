[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditsServiceItemCreateRequest

# Class: StockAuditsServiceItemCreateRequest

Describes the parameters required to add an item to a stock audit

**`Generated`**

from message Scailo.StockAuditsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)\>

  ↳ **`StockAuditsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](StockAuditsServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](StockAuditsServiceItemCreateRequest.md#familyid)
- [itemHash](StockAuditsServiceItemCreateRequest.md#itemhash)
- [physicalQuantity](StockAuditsServiceItemCreateRequest.md#physicalquantity)
- [reconciliationReason](StockAuditsServiceItemCreateRequest.md#reconciliationreason)
- [stockAuditId](StockAuditsServiceItemCreateRequest.md#stockauditid)
- [userComment](StockAuditsServiceItemCreateRequest.md#usercomment)
- [fields](StockAuditsServiceItemCreateRequest.md#fields)
- [runtime](StockAuditsServiceItemCreateRequest.md#runtime)
- [typeName](StockAuditsServiceItemCreateRequest.md#typename)

### Methods

- [clone](StockAuditsServiceItemCreateRequest.md#clone)
- [equals](StockAuditsServiceItemCreateRequest.md#equals)
- [fromBinary](StockAuditsServiceItemCreateRequest.md#frombinary)
- [fromJson](StockAuditsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](StockAuditsServiceItemCreateRequest.md#fromjsonstring)
- [getType](StockAuditsServiceItemCreateRequest.md#gettype)
- [toBinary](StockAuditsServiceItemCreateRequest.md#tobinary)
- [toJSON](StockAuditsServiceItemCreateRequest.md#tojson)
- [toJson](StockAuditsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](StockAuditsServiceItemCreateRequest.md#tojsonstring)
- [equals](StockAuditsServiceItemCreateRequest.md#equals-1)
- [fromBinary](StockAuditsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](StockAuditsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](StockAuditsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditsServiceItemCreateRequest**(`data?`): [`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)\> |

#### Returns

[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;StockAuditsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:557

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/stock_audits.scailo_pb.ts:532

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/stock_audits.scailo_pb.ts:539

___

### physicalQuantity

• **physicalQuantity**: `bigint` = `protoInt64.zero`

The physically available quantity (in cents)

**`Generated`**

from field: uint64 physical_quantity = 13;

#### Defined in

src/stock_audits.scailo_pb.ts:546

___

### reconciliationReason

• **reconciliationReason**: `string` = `""`

The digitally available quantity (in cents)
uint64 digital_quantity = 14 [(genesis_validate.rules).uint64.gt = 0];
The reason for reconciliation

**`Generated`**

from field: string reconciliation_reason = 15;

#### Defined in

src/stock_audits.scailo_pb.ts:555

___

### stockAuditId

• **stockAuditId**: `bigint` = `protoInt64.zero`

Stores the stock audit ID

**`Generated`**

from field: uint64 stock_audit_id = 10;

#### Defined in

src/stock_audits.scailo_pb.ts:525

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/stock_audits.scailo_pb.ts:518

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:564

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:562

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditsServiceItemCreateRequest"``

#### Defined in

src/stock_audits.scailo_pb.ts:563

## Methods

### clone

▸ **clone**(): [`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md) \| `PlainMessage`\<[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md) \| `PlainMessage`\<[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md) \| `PlainMessage`\<[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:585

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:573

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:577

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceItemCreateRequest`](StockAuditsServiceItemCreateRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:581

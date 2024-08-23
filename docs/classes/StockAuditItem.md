[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditItem

# Class: StockAuditItem

Describes the parameters that constitute an item associated to a stock audit

**`Generated`**

from message Scailo.StockAuditItem

## Hierarchy

- `Message`\<[`StockAuditItem`](StockAuditItem.md)\>

  ↳ **`StockAuditItem`**

## Table of contents

### Constructors

- [constructor](StockAuditItem.md#constructor)

### Properties

- [approvalMetadata](StockAuditItem.md#approvalmetadata)
- [digitalQuantity](StockAuditItem.md#digitalquantity)
- [entityUuid](StockAuditItem.md#entityuuid)
- [familyId](StockAuditItem.md#familyid)
- [itemHash](StockAuditItem.md#itemhash)
- [metadata](StockAuditItem.md#metadata)
- [needApproval](StockAuditItem.md#needapproval)
- [physicalQuantity](StockAuditItem.md#physicalquantity)
- [reconciliationReason](StockAuditItem.md#reconciliationreason)
- [stockAuditId](StockAuditItem.md#stockauditid)
- [userComment](StockAuditItem.md#usercomment)
- [fields](StockAuditItem.md#fields)
- [runtime](StockAuditItem.md#runtime)
- [typeName](StockAuditItem.md#typename)

### Methods

- [clone](StockAuditItem.md#clone)
- [equals](StockAuditItem.md#equals)
- [fromBinary](StockAuditItem.md#frombinary)
- [fromJson](StockAuditItem.md#fromjson)
- [fromJsonString](StockAuditItem.md#fromjsonstring)
- [getType](StockAuditItem.md#gettype)
- [toBinary](StockAuditItem.md#tobinary)
- [toJSON](StockAuditItem.md#tojson)
- [toJson](StockAuditItem.md#tojson-1)
- [toJsonString](StockAuditItem.md#tojsonstring)
- [equals](StockAuditItem.md#equals-1)
- [fromBinary](StockAuditItem.md#frombinary-1)
- [fromJson](StockAuditItem.md#fromjson-1)
- [fromJsonString](StockAuditItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditItem**(`data?`): [`StockAuditItem`](StockAuditItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditItem`](StockAuditItem.md)\> |

#### Returns

[`StockAuditItem`](StockAuditItem.md)

#### Overrides

Message\&lt;StockAuditItem\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:750

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/stock_audits.scailo_pb.ts:692

___

### digitalQuantity

• **digitalQuantity**: `bigint` = `protoInt64.zero`

The digitally available quantity (in cents)

**`Generated`**

from field: uint64 digital_quantity = 14;

#### Defined in

src/stock_audits.scailo_pb.ts:741

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/stock_audits.scailo_pb.ts:678

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/stock_audits.scailo_pb.ts:720

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/stock_audits.scailo_pb.ts:727

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this stock audit

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/stock_audits.scailo_pb.ts:685

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/stock_audits.scailo_pb.ts:699

___

### physicalQuantity

• **physicalQuantity**: `bigint` = `protoInt64.zero`

The physically available quantity (in cents)

**`Generated`**

from field: uint64 physical_quantity = 13;

#### Defined in

src/stock_audits.scailo_pb.ts:734

___

### reconciliationReason

• **reconciliationReason**: `string` = `""`

The reason for reconciliation

**`Generated`**

from field: string reconciliation_reason = 15;

#### Defined in

src/stock_audits.scailo_pb.ts:748

___

### stockAuditId

• **stockAuditId**: `bigint` = `protoInt64.zero`

Stores the stock audit ID

**`Generated`**

from field: uint64 stock_audit_id = 10;

#### Defined in

src/stock_audits.scailo_pb.ts:713

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/stock_audits.scailo_pb.ts:706

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:757

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:755

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditItem"``

#### Defined in

src/stock_audits.scailo_pb.ts:756

## Methods

### clone

▸ **clone**(): [`StockAuditItem`](StockAuditItem.md)

Create a deep copy.

#### Returns

[`StockAuditItem`](StockAuditItem.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditItem`](StockAuditItem.md) \| `PlainMessage`\<[`StockAuditItem`](StockAuditItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditItem`](StockAuditItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditItem`](StockAuditItem.md)\>

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
| `a` | `undefined` \| [`StockAuditItem`](StockAuditItem.md) \| `PlainMessage`\<[`StockAuditItem`](StockAuditItem.md)\> |
| `b` | `undefined` \| [`StockAuditItem`](StockAuditItem.md) \| `PlainMessage`\<[`StockAuditItem`](StockAuditItem.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:783

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditItem`](StockAuditItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditItem`](StockAuditItem.md)

#### Defined in

src/stock_audits.scailo_pb.ts:771

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditItem`](StockAuditItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditItem`](StockAuditItem.md)

#### Defined in

src/stock_audits.scailo_pb.ts:775

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditItem`](StockAuditItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditItem`](StockAuditItem.md)

#### Defined in

src/stock_audits.scailo_pb.ts:779

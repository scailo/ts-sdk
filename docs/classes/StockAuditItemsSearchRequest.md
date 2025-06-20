[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditItemsSearchRequest

# Class: StockAuditItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.StockAuditItemsSearchRequest

## Hierarchy

- `Message`\<[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)\>

  ↳ **`StockAuditItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](StockAuditItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](StockAuditItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](StockAuditItemsSearchRequest.md#approvedonend)
- [approvedOnStart](StockAuditItemsSearchRequest.md#approvedonstart)
- [approverRoleId](StockAuditItemsSearchRequest.md#approverroleid)
- [count](StockAuditItemsSearchRequest.md#count)
- [entityUuid](StockAuditItemsSearchRequest.md#entityuuid)
- [familyId](StockAuditItemsSearchRequest.md#familyid)
- [isActive](StockAuditItemsSearchRequest.md#isactive)
- [itemHash](StockAuditItemsSearchRequest.md#itemhash)
- [offset](StockAuditItemsSearchRequest.md#offset)
- [searchKey](StockAuditItemsSearchRequest.md#searchkey)
- [sortKey](StockAuditItemsSearchRequest.md#sortkey)
- [sortOrder](StockAuditItemsSearchRequest.md#sortorder)
- [status](StockAuditItemsSearchRequest.md#status)
- [stockAuditId](StockAuditItemsSearchRequest.md#stockauditid)
- [fields](StockAuditItemsSearchRequest.md#fields)
- [runtime](StockAuditItemsSearchRequest.md#runtime)
- [typeName](StockAuditItemsSearchRequest.md#typename)

### Methods

- [clone](StockAuditItemsSearchRequest.md#clone)
- [equals](StockAuditItemsSearchRequest.md#equals)
- [fromBinary](StockAuditItemsSearchRequest.md#frombinary)
- [fromJson](StockAuditItemsSearchRequest.md#fromjson)
- [fromJsonString](StockAuditItemsSearchRequest.md#fromjsonstring)
- [getType](StockAuditItemsSearchRequest.md#gettype)
- [toBinary](StockAuditItemsSearchRequest.md#tobinary)
- [toJSON](StockAuditItemsSearchRequest.md#tojson)
- [toJson](StockAuditItemsSearchRequest.md#tojson-1)
- [toJsonString](StockAuditItemsSearchRequest.md#tojsonstring)
- [equals](StockAuditItemsSearchRequest.md#equals-1)
- [fromBinary](StockAuditItemsSearchRequest.md#frombinary-1)
- [fromJson](StockAuditItemsSearchRequest.md#fromjson-1)
- [fromJsonString](StockAuditItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditItemsSearchRequest**(`data?`): [`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)\> |

#### Returns

[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)

#### Overrides

Message\&lt;StockAuditItemsSearchRequest\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:1718

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/stock_audits.scailo_pb.ts:1681

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/stock_audits.scailo_pb.ts:1674

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/stock_audits.scailo_pb.ts:1667

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/stock_audits.scailo_pb.ts:1688

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/stock_audits.scailo_pb.ts:1625

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/stock_audits.scailo_pb.ts:1653

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/stock_audits.scailo_pb.ts:1702

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/stock_audits.scailo_pb.ts:1618

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash

**`Generated`**

from field: string item_hash = 22;

#### Defined in

src/stock_audits.scailo_pb.ts:1709

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/stock_audits.scailo_pb.ts:1632

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/stock_audits.scailo_pb.ts:1716

___

### sortKey

• **sortKey**: [`STOCK_AUDIT_ITEM_SORT_KEY`](../enums/STOCK_AUDIT_ITEM_SORT_KEY.md) = `STOCK_AUDIT_ITEM_SORT_KEY.STOCK_AUDIT_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.STOCK_AUDIT_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/stock_audits.scailo_pb.ts:1646

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/stock_audits.scailo_pb.ts:1639

___

### status

• **status**: [`STOCK_AUDIT_ITEM_STATUS`](../enums/STOCK_AUDIT_ITEM_STATUS.md) = `STOCK_AUDIT_ITEM_STATUS.STOCK_AUDIT_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.STOCK_AUDIT_ITEM_STATUS status = 7;

#### Defined in

src/stock_audits.scailo_pb.ts:1660

___

### stockAuditId

• **stockAuditId**: `bigint` = `protoInt64.zero`

The ID of the stock audit

**`Generated`**

from field: uint64 stock_audit_id = 20;

#### Defined in

src/stock_audits.scailo_pb.ts:1695

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:1725

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:1723

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditItemsSearchRequest"``

#### Defined in

src/stock_audits.scailo_pb.ts:1724

## Methods

### clone

▸ **clone**(): [`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md) \| `PlainMessage`\<[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md) \| `PlainMessage`\<[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md) \| `PlainMessage`\<[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:1755

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1743

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1747

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditItemsSearchRequest`](StockAuditItemsSearchRequest.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1751

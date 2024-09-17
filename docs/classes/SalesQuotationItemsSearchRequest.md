[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationItemsSearchRequest

# Class: SalesQuotationItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.SalesQuotationItemsSearchRequest

## Hierarchy

- `Message`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\>

  ↳ **`SalesQuotationItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](SalesQuotationItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](SalesQuotationItemsSearchRequest.md#approvedonend)
- [approvedOnStart](SalesQuotationItemsSearchRequest.md#approvedonstart)
- [approverRoleId](SalesQuotationItemsSearchRequest.md#approverroleid)
- [bundledWithId](SalesQuotationItemsSearchRequest.md#bundledwithid)
- [clientFamilyCode](SalesQuotationItemsSearchRequest.md#clientfamilycode)
- [clientUomId](SalesQuotationItemsSearchRequest.md#clientuomid)
- [count](SalesQuotationItemsSearchRequest.md#count)
- [deliveryDateEnd](SalesQuotationItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](SalesQuotationItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](SalesQuotationItemsSearchRequest.md#deliverydatestart)
- [entityUuid](SalesQuotationItemsSearchRequest.md#entityuuid)
- [familyId](SalesQuotationItemsSearchRequest.md#familyid)
- [isActive](SalesQuotationItemsSearchRequest.md#isactive)
- [offset](SalesQuotationItemsSearchRequest.md#offset)
- [salesQuotationId](SalesQuotationItemsSearchRequest.md#salesquotationid)
- [searchKey](SalesQuotationItemsSearchRequest.md#searchkey)
- [sortKey](SalesQuotationItemsSearchRequest.md#sortkey)
- [sortOrder](SalesQuotationItemsSearchRequest.md#sortorder)
- [status](SalesQuotationItemsSearchRequest.md#status)
- [taxGroupId](SalesQuotationItemsSearchRequest.md#taxgroupid)
- [fields](SalesQuotationItemsSearchRequest.md#fields)
- [runtime](SalesQuotationItemsSearchRequest.md#runtime)
- [typeName](SalesQuotationItemsSearchRequest.md#typename)

### Methods

- [clone](SalesQuotationItemsSearchRequest.md#clone)
- [equals](SalesQuotationItemsSearchRequest.md#equals)
- [fromBinary](SalesQuotationItemsSearchRequest.md#frombinary)
- [fromJson](SalesQuotationItemsSearchRequest.md#fromjson)
- [fromJsonString](SalesQuotationItemsSearchRequest.md#fromjsonstring)
- [getType](SalesQuotationItemsSearchRequest.md#gettype)
- [toBinary](SalesQuotationItemsSearchRequest.md#tobinary)
- [toJSON](SalesQuotationItemsSearchRequest.md#tojson)
- [toJson](SalesQuotationItemsSearchRequest.md#tojson-1)
- [toJsonString](SalesQuotationItemsSearchRequest.md#tojsonstring)
- [equals](SalesQuotationItemsSearchRequest.md#equals-1)
- [fromBinary](SalesQuotationItemsSearchRequest.md#frombinary-1)
- [fromJson](SalesQuotationItemsSearchRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationItemsSearchRequest**(`data?`): [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\> |

#### Returns

[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Overrides

Message\&lt;SalesQuotationItemsSearchRequest\&gt;.constructor

#### Defined in

src/sales_quotations.scailo_pb.ts:2708

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/sales_quotations.scailo_pb.ts:2629

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/sales_quotations.scailo_pb.ts:2622

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/sales_quotations.scailo_pb.ts:2615

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/sales_quotations.scailo_pb.ts:2636

___

### bundledWithId

• **bundledWithId**: `bigint` = `protoInt64.zero`

Stores the ID of the sales squotation item with which this item is bundled with

**`Generated`**

from field: uint64 bundled_with_id = 21;

#### Defined in

src/sales_quotations.scailo_pb.ts:2650

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 26;

#### Defined in

src/sales_quotations.scailo_pb.ts:2671

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 23;

#### Defined in

src/sales_quotations.scailo_pb.ts:2664

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/sales_quotations.scailo_pb.ts:2573

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_end = 30;

#### Defined in

src/sales_quotations.scailo_pb.ts:2699

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_exact = 28;

#### Defined in

src/sales_quotations.scailo_pb.ts:2685

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_start = 29;

#### Defined in

src/sales_quotations.scailo_pb.ts:2692

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/sales_quotations.scailo_pb.ts:2601

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

src/sales_quotations.scailo_pb.ts:2657

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_quotations.scailo_pb.ts:2566

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/sales_quotations.scailo_pb.ts:2580

___

### salesQuotationId

• **salesQuotationId**: `bigint` = `protoInt64.zero`

The ID of the sales quotation

**`Generated`**

from field: uint64 sales_quotation_id = 20;

#### Defined in

src/sales_quotations.scailo_pb.ts:2643

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/sales_quotations.scailo_pb.ts:2706

___

### sortKey

• **sortKey**: [`SALES_QUOTATION_ITEM_SORT_KEY`](../enums/SALES_QUOTATION_ITEM_SORT_KEY.md) = `SALES_QUOTATION_ITEM_SORT_KEY.SALES_QUOTATION_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_QUOTATION_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/sales_quotations.scailo_pb.ts:2594

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/sales_quotations.scailo_pb.ts:2587

___

### status

• **status**: [`SALES_QUOTATION_ITEM_STATUS`](../enums/SALES_QUOTATION_ITEM_STATUS.md) = `SALES_QUOTATION_ITEM_STATUS.SALES_QUOTATION_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.SALES_QUOTATION_ITEM_STATUS status = 7;

#### Defined in

src/sales_quotations.scailo_pb.ts:2608

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 27;

#### Defined in

src/sales_quotations.scailo_pb.ts:2678

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_quotations.scailo_pb.ts:2715

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_quotations.scailo_pb.ts:2713

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationItemsSearchRequest"``

#### Defined in

src/sales_quotations.scailo_pb.ts:2714

## Methods

### clone

▸ **clone**(): [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md) \| `PlainMessage`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md) \| `PlainMessage`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md) \| `PlainMessage`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_quotations.scailo_pb.ts:2751

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2739

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2743

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Defined in

src/sales_quotations.scailo_pb.ts:2747

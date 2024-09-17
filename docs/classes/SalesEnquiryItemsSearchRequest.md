[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiryItemsSearchRequest

# Class: SalesEnquiryItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.SalesEnquiryItemsSearchRequest

## Hierarchy

- `Message`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\>

  ↳ **`SalesEnquiryItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiryItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](SalesEnquiryItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](SalesEnquiryItemsSearchRequest.md#approvedonend)
- [approvedOnStart](SalesEnquiryItemsSearchRequest.md#approvedonstart)
- [approverRoleId](SalesEnquiryItemsSearchRequest.md#approverroleid)
- [count](SalesEnquiryItemsSearchRequest.md#count)
- [deliveryDateEnd](SalesEnquiryItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](SalesEnquiryItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](SalesEnquiryItemsSearchRequest.md#deliverydatestart)
- [entityUuid](SalesEnquiryItemsSearchRequest.md#entityuuid)
- [isActive](SalesEnquiryItemsSearchRequest.md#isactive)
- [offset](SalesEnquiryItemsSearchRequest.md#offset)
- [salesEnquiryId](SalesEnquiryItemsSearchRequest.md#salesenquiryid)
- [searchKey](SalesEnquiryItemsSearchRequest.md#searchkey)
- [sortKey](SalesEnquiryItemsSearchRequest.md#sortkey)
- [sortOrder](SalesEnquiryItemsSearchRequest.md#sortorder)
- [status](SalesEnquiryItemsSearchRequest.md#status)
- [taxGroupId](SalesEnquiryItemsSearchRequest.md#taxgroupid)
- [uomId](SalesEnquiryItemsSearchRequest.md#uomid)
- [fields](SalesEnquiryItemsSearchRequest.md#fields)
- [runtime](SalesEnquiryItemsSearchRequest.md#runtime)
- [typeName](SalesEnquiryItemsSearchRequest.md#typename)

### Methods

- [clone](SalesEnquiryItemsSearchRequest.md#clone)
- [equals](SalesEnquiryItemsSearchRequest.md#equals)
- [fromBinary](SalesEnquiryItemsSearchRequest.md#frombinary)
- [fromJson](SalesEnquiryItemsSearchRequest.md#fromjson)
- [fromJsonString](SalesEnquiryItemsSearchRequest.md#fromjsonstring)
- [getType](SalesEnquiryItemsSearchRequest.md#gettype)
- [toBinary](SalesEnquiryItemsSearchRequest.md#tobinary)
- [toJSON](SalesEnquiryItemsSearchRequest.md#tojson)
- [toJson](SalesEnquiryItemsSearchRequest.md#tojson-1)
- [toJsonString](SalesEnquiryItemsSearchRequest.md#tojsonstring)
- [equals](SalesEnquiryItemsSearchRequest.md#equals-1)
- [fromBinary](SalesEnquiryItemsSearchRequest.md#frombinary-1)
- [fromJson](SalesEnquiryItemsSearchRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiryItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiryItemsSearchRequest**(`data?`): [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\> |

#### Returns

[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Overrides

Message\&lt;SalesEnquiryItemsSearchRequest\&gt;.constructor

#### Defined in

src/sales_enquiries.scailo_pb.ts:1411

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1353

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1346

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1339

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1360

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1297

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_end = 30;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1402

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_exact = 28;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1388

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_start = 29;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1395

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1325

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1290

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1304

___

### salesEnquiryId

• **salesEnquiryId**: `bigint` = `protoInt64.zero`

Stores the sales enquiry ID

**`Generated`**

from field: uint64 sales_enquiry_id = 20;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1367

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1409

___

### sortKey

• **sortKey**: [`SALES_ENQUIRY_ITEM_SORT_KEY`](../enums/SALES_ENQUIRY_ITEM_SORT_KEY.md) = `SALES_ENQUIRY_ITEM_SORT_KEY.SALES_ENQUIRY_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_ENQUIRY_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1318

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1311

___

### status

• **status**: [`SALES_ENQUIRY_ITEM_STATUS`](../enums/SALES_ENQUIRY_ITEM_STATUS.md) = `SALES_ENQUIRY_ITEM_STATUS.SALES_ENQUIRY_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.SALES_ENQUIRY_ITEM_STATUS status = 7;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1332

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 22;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1381

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the unit of material

**`Generated`**

from field: uint64 uom_id = 21;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1374

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_enquiries.scailo_pb.ts:1418

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_enquiries.scailo_pb.ts:1416

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiryItemsSearchRequest"``

#### Defined in

src/sales_enquiries.scailo_pb.ts:1417

## Methods

### clone

▸ **clone**(): [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md) \| `PlainMessage`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md) \| `PlainMessage`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md) \| `PlainMessage`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_enquiries.scailo_pb.ts:1451

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:1439

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:1443

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:1447

[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseEnquiryItemsSearchRequest

# Class: PurchaseEnquiryItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.PurchaseEnquiryItemsSearchRequest

## Hierarchy

- `Message`\<[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)\>

  ↳ **`PurchaseEnquiryItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](PurchaseEnquiryItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](PurchaseEnquiryItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](PurchaseEnquiryItemsSearchRequest.md#approvedonend)
- [approvedOnStart](PurchaseEnquiryItemsSearchRequest.md#approvedonstart)
- [approverRoleId](PurchaseEnquiryItemsSearchRequest.md#approverroleid)
- [count](PurchaseEnquiryItemsSearchRequest.md#count)
- [entityUuid](PurchaseEnquiryItemsSearchRequest.md#entityuuid)
- [isActive](PurchaseEnquiryItemsSearchRequest.md#isactive)
- [offset](PurchaseEnquiryItemsSearchRequest.md#offset)
- [purchaseEnquiryId](PurchaseEnquiryItemsSearchRequest.md#purchaseenquiryid)
- [requiredByDateEnd](PurchaseEnquiryItemsSearchRequest.md#requiredbydateend)
- [requiredByDateExact](PurchaseEnquiryItemsSearchRequest.md#requiredbydateexact)
- [requiredByDateStart](PurchaseEnquiryItemsSearchRequest.md#requiredbydatestart)
- [searchKey](PurchaseEnquiryItemsSearchRequest.md#searchkey)
- [sortKey](PurchaseEnquiryItemsSearchRequest.md#sortkey)
- [sortOrder](PurchaseEnquiryItemsSearchRequest.md#sortorder)
- [status](PurchaseEnquiryItemsSearchRequest.md#status)
- [uomId](PurchaseEnquiryItemsSearchRequest.md#uomid)
- [fields](PurchaseEnquiryItemsSearchRequest.md#fields)
- [runtime](PurchaseEnquiryItemsSearchRequest.md#runtime)
- [typeName](PurchaseEnquiryItemsSearchRequest.md#typename)

### Methods

- [clone](PurchaseEnquiryItemsSearchRequest.md#clone)
- [equals](PurchaseEnquiryItemsSearchRequest.md#equals)
- [fromBinary](PurchaseEnquiryItemsSearchRequest.md#frombinary)
- [fromJson](PurchaseEnquiryItemsSearchRequest.md#fromjson)
- [fromJsonString](PurchaseEnquiryItemsSearchRequest.md#fromjsonstring)
- [getType](PurchaseEnquiryItemsSearchRequest.md#gettype)
- [toBinary](PurchaseEnquiryItemsSearchRequest.md#tobinary)
- [toJSON](PurchaseEnquiryItemsSearchRequest.md#tojson)
- [toJson](PurchaseEnquiryItemsSearchRequest.md#tojson-1)
- [toJsonString](PurchaseEnquiryItemsSearchRequest.md#tojsonstring)
- [equals](PurchaseEnquiryItemsSearchRequest.md#equals-1)
- [fromBinary](PurchaseEnquiryItemsSearchRequest.md#frombinary-1)
- [fromJson](PurchaseEnquiryItemsSearchRequest.md#fromjson-1)
- [fromJsonString](PurchaseEnquiryItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseEnquiryItemsSearchRequest**(`data?`): [`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)\> |

#### Returns

[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)

#### Overrides

Message\&lt;PurchaseEnquiryItemsSearchRequest\&gt;.constructor

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1108

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1057

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1050

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1043

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1064

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1001

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1029

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:994

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1008

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

Stores the purchase enquiry ID

**`Generated`**

from field: uint64 purchase_enquiry_id = 20;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1071

___

### requiredByDateEnd

• **requiredByDateEnd**: `string` = `""`

The end required by date of the item in the purchase enquiry

**`Generated`**

from field: string required_by_date_end = 30;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1099

___

### requiredByDateExact

• **requiredByDateExact**: `string` = `""`

The exact required by date of the item in the purchase enquiry

**`Generated`**

from field: string required_by_date_exact = 28;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1085

___

### requiredByDateStart

• **requiredByDateStart**: `string` = `""`

The start required by date of the item in the purchase enquiry

**`Generated`**

from field: string required_by_date_start = 29;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1092

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1106

___

### sortKey

• **sortKey**: [`PURCHASE_ENQUIRY_ITEM_SORT_KEY`](../enums/PURCHASE_ENQUIRY_ITEM_SORT_KEY.md) = `PURCHASE_ENQUIRY_ITEM_SORT_KEY.PURCHASE_ENQUIRY_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PURCHASE_ENQUIRY_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1022

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1015

___

### status

• **status**: [`PURCHASE_ENQUIRY_ITEM_STATUS`](../enums/PURCHASE_ENQUIRY_ITEM_STATUS.md) = `PURCHASE_ENQUIRY_ITEM_STATUS.PURCHASE_ENQUIRY_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.PURCHASE_ENQUIRY_ITEM_STATUS status = 7;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1036

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the unit of material

**`Generated`**

from field: uint64 uom_id = 21;

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1078

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1115

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1113

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseEnquiryItemsSearchRequest"``

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1114

## Methods

### clone

▸ **clone**(): [`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1147

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1135

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1139

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiryItemsSearchRequest`](PurchaseEnquiryItemsSearchRequest.md)

#### Defined in

src/purchases_enquiries.scailo_pb.ts:1143

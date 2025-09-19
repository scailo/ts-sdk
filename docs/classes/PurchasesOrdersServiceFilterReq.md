[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceFilterReq

# Class: PurchasesOrdersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.PurchasesOrdersServiceFilterReq

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\>

  ↳ **`PurchasesOrdersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesOrdersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesOrdersServiceFilterReq.md#approvedonend)
- [approvedOnStart](PurchasesOrdersServiceFilterReq.md#approvedonstart)
- [approverRoleId](PurchasesOrdersServiceFilterReq.md#approverroleid)
- [buyerLocationId](PurchasesOrdersServiceFilterReq.md#buyerlocationid)
- [completedOnEnd](PurchasesOrdersServiceFilterReq.md#completedonend)
- [completedOnStart](PurchasesOrdersServiceFilterReq.md#completedonstart)
- [consigneeLocationId](PurchasesOrdersServiceFilterReq.md#consigneelocationid)
- [count](PurchasesOrdersServiceFilterReq.md#count)
- [creationTimestampEnd](PurchasesOrdersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesOrdersServiceFilterReq.md#creationtimestampstart)
- [currencyId](PurchasesOrdersServiceFilterReq.md#currencyid)
- [deliveryDateEnd](PurchasesOrdersServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](PurchasesOrdersServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](PurchasesOrdersServiceFilterReq.md#deliverydatestart)
- [entityUuid](PurchasesOrdersServiceFilterReq.md#entityuuid)
- [familyId](PurchasesOrdersServiceFilterReq.md#familyid)
- [finalRefNumber](PurchasesOrdersServiceFilterReq.md#finalrefnumber)
- [formData](PurchasesOrdersServiceFilterReq.md#formdata)
- [isActive](PurchasesOrdersServiceFilterReq.md#isactive)
- [modificationTimestampEnd](PurchasesOrdersServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesOrdersServiceFilterReq.md#modificationtimestampstart)
- [offset](PurchasesOrdersServiceFilterReq.md#offset)
- [projectId](PurchasesOrdersServiceFilterReq.md#projectid)
- [referenceId](PurchasesOrdersServiceFilterReq.md#referenceid)
- [sortKey](PurchasesOrdersServiceFilterReq.md#sortkey)
- [sortOrder](PurchasesOrdersServiceFilterReq.md#sortorder)
- [status](PurchasesOrdersServiceFilterReq.md#status)
- [totalValueMax](PurchasesOrdersServiceFilterReq.md#totalvaluemax)
- [totalValueMin](PurchasesOrdersServiceFilterReq.md#totalvaluemin)
- [vendorId](PurchasesOrdersServiceFilterReq.md#vendorid)
- [fields](PurchasesOrdersServiceFilterReq.md#fields)
- [runtime](PurchasesOrdersServiceFilterReq.md#runtime)
- [typeName](PurchasesOrdersServiceFilterReq.md#typename)

### Methods

- [clone](PurchasesOrdersServiceFilterReq.md#clone)
- [equals](PurchasesOrdersServiceFilterReq.md#equals)
- [fromBinary](PurchasesOrdersServiceFilterReq.md#frombinary)
- [fromJson](PurchasesOrdersServiceFilterReq.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceFilterReq.md#fromjsonstring)
- [getType](PurchasesOrdersServiceFilterReq.md#gettype)
- [toBinary](PurchasesOrdersServiceFilterReq.md#tobinary)
- [toJSON](PurchasesOrdersServiceFilterReq.md#tojson)
- [toJson](PurchasesOrdersServiceFilterReq.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceFilterReq.md#tojsonstring)
- [equals](PurchasesOrdersServiceFilterReq.md#equals-1)
- [fromBinary](PurchasesOrdersServiceFilterReq.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceFilterReq.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceFilterReq**(`data?`): [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\> |

#### Returns

[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceFilterReq\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:2057](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2057)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1936](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1936)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1929](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1929)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1922](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1922)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1943](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1943)

___

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The associated buyer location ID

**`Generated`**

from field: uint64 buyer_location_id = 23;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1985](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1985)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1957](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1957)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1950](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1950)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The associated consignee location ID

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1978](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1978)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1852](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1852)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1887](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1887)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1880)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1999](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1999)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2034](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2034)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2020](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2020)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2027](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2027)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1908](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1908)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2013](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2013)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1971](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1971)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2055](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2055)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1845](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1845)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1901](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1901)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1894](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1894)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1859](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1859)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2006](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2006)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase order

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1964](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1964)

___

### sortKey

• **sortKey**: [`PURCHASE_ORDER_SORT_KEY`](../enums/PURCHASE_ORDER_SORT_KEY.md) = `PURCHASE_ORDER_SORT_KEY.PURCHASE_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PURCHASE_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1873](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1873)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1866](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1866)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase order

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1915](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1915)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the purchase order (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2048](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2048)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the purchase order (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2041](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2041)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

[src/purchases_orders.scailo_pb.ts:1992](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L1992)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2064](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2064)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2062](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2062)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceFilterReq"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:2063](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2063)

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2110](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2110)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2098](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2098)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2102](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2102)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceFilterReq`](PurchasesOrdersServiceFilterReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2106](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2106)

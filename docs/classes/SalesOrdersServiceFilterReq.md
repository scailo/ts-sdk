[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrdersServiceFilterReq

# Class: SalesOrdersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.SalesOrdersServiceFilterReq

## Hierarchy

- `Message`\<[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)\>

  ↳ **`SalesOrdersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalesOrdersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalesOrdersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalesOrdersServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalesOrdersServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalesOrdersServiceFilterReq.md#approverroleid)
- [buyerClientId](SalesOrdersServiceFilterReq.md#buyerclientid)
- [completedOnEnd](SalesOrdersServiceFilterReq.md#completedonend)
- [completedOnStart](SalesOrdersServiceFilterReq.md#completedonstart)
- [consigneeClientId](SalesOrdersServiceFilterReq.md#consigneeclientid)
- [count](SalesOrdersServiceFilterReq.md#count)
- [creationTimestampEnd](SalesOrdersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalesOrdersServiceFilterReq.md#creationtimestampstart)
- [currencyId](SalesOrdersServiceFilterReq.md#currencyid)
- [deliveryDateEnd](SalesOrdersServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](SalesOrdersServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](SalesOrdersServiceFilterReq.md#deliverydatestart)
- [entityUuid](SalesOrdersServiceFilterReq.md#entityuuid)
- [familyId](SalesOrdersServiceFilterReq.md#familyid)
- [finalRefNumber](SalesOrdersServiceFilterReq.md#finalrefnumber)
- [formData](SalesOrdersServiceFilterReq.md#formdata)
- [isActive](SalesOrdersServiceFilterReq.md#isactive)
- [locationId](SalesOrdersServiceFilterReq.md#locationid)
- [modificationTimestampEnd](SalesOrdersServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesOrdersServiceFilterReq.md#modificationtimestampstart)
- [offset](SalesOrdersServiceFilterReq.md#offset)
- [projectId](SalesOrdersServiceFilterReq.md#projectid)
- [referenceId](SalesOrdersServiceFilterReq.md#referenceid)
- [sortKey](SalesOrdersServiceFilterReq.md#sortkey)
- [sortOrder](SalesOrdersServiceFilterReq.md#sortorder)
- [status](SalesOrdersServiceFilterReq.md#status)
- [totalValueMax](SalesOrdersServiceFilterReq.md#totalvaluemax)
- [totalValueMin](SalesOrdersServiceFilterReq.md#totalvaluemin)
- [fields](SalesOrdersServiceFilterReq.md#fields)
- [runtime](SalesOrdersServiceFilterReq.md#runtime)
- [typeName](SalesOrdersServiceFilterReq.md#typename)

### Methods

- [clone](SalesOrdersServiceFilterReq.md#clone)
- [equals](SalesOrdersServiceFilterReq.md#equals)
- [fromBinary](SalesOrdersServiceFilterReq.md#frombinary)
- [fromJson](SalesOrdersServiceFilterReq.md#fromjson)
- [fromJsonString](SalesOrdersServiceFilterReq.md#fromjsonstring)
- [getType](SalesOrdersServiceFilterReq.md#gettype)
- [toBinary](SalesOrdersServiceFilterReq.md#tobinary)
- [toJSON](SalesOrdersServiceFilterReq.md#tojson)
- [toJson](SalesOrdersServiceFilterReq.md#tojson-1)
- [toJsonString](SalesOrdersServiceFilterReq.md#tojsonstring)
- [equals](SalesOrdersServiceFilterReq.md#equals-1)
- [fromBinary](SalesOrdersServiceFilterReq.md#frombinary-1)
- [fromJson](SalesOrdersServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalesOrdersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrdersServiceFilterReq**(`data?`): [`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)\> |

#### Returns

[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)

#### Overrides

Message\&lt;SalesOrdersServiceFilterReq\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:2054](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2054)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:1933](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1933)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:1926](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1926)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/sales_orders.scailo_pb.ts:1919](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1919)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/sales_orders.scailo_pb.ts:1940](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1940)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

[src/sales_orders.scailo_pb.ts:1982](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1982)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/sales_orders.scailo_pb.ts:1954](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1954)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/sales_orders.scailo_pb.ts:1947](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1947)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The associated consignee client ID

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

[src/sales_orders.scailo_pb.ts:1975](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1975)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:1849](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1849)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/sales_orders.scailo_pb.ts:1884](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1884)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/sales_orders.scailo_pb.ts:1877](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1877)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/sales_orders.scailo_pb.ts:1996](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1996)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the sales order

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/sales_orders.scailo_pb.ts:2031](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2031)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the sales order

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/sales_orders.scailo_pb.ts:2017](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2017)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the sales order

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/sales_orders.scailo_pb.ts:2024](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2024)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/sales_orders.scailo_pb.ts:1905](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1905)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/sales_orders.scailo_pb.ts:2010](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2010)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:1968](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1968)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_orders.scailo_pb.ts:2052](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2052)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:1842](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1842)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/sales_orders.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1989)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/sales_orders.scailo_pb.ts:1898](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1898)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/sales_orders.scailo_pb.ts:1891](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1891)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/sales_orders.scailo_pb.ts:1856](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1856)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/sales_orders.scailo_pb.ts:2003](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2003)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales order

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:1961](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1961)

___

### sortKey

• **sortKey**: [`SALES_ORDER_SORT_KEY`](../enums/SALES_ORDER_SORT_KEY.md) = `SALES_ORDER_SORT_KEY.SALES_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_orders.scailo_pb.ts:1870](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1870)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_orders.scailo_pb.ts:1863](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1863)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales order

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:1912](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L1912)

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the sales order (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

[src/sales_orders.scailo_pb.ts:2045](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2045)

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the sales order (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

[src/sales_orders.scailo_pb.ts:2038](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2038)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:2061](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2061)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:2059](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2059)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrdersServiceFilterReq"``

#### Defined in

[src/sales_orders.scailo_pb.ts:2060](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2060)

## Methods

### clone

▸ **clone**(): [`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md) \| `PlainMessage`\<[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md) \| `PlainMessage`\<[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md) \| `PlainMessage`\<[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:2107](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2107)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2095](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2095)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2099](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2099)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrdersServiceFilterReq`](SalesOrdersServiceFilterReq.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:2103](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_orders.scailo_pb.ts#L2103)

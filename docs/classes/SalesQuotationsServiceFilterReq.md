[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceFilterReq

# Class: SalesQuotationsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.SalesQuotationsServiceFilterReq

## Hierarchy

- `Message`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\>

  ↳ **`SalesQuotationsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](SalesQuotationsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](SalesQuotationsServiceFilterReq.md#approvedonend)
- [approvedOnStart](SalesQuotationsServiceFilterReq.md#approvedonstart)
- [approverRoleId](SalesQuotationsServiceFilterReq.md#approverroleid)
- [buyerClientId](SalesQuotationsServiceFilterReq.md#buyerclientid)
- [completedOnEnd](SalesQuotationsServiceFilterReq.md#completedonend)
- [completedOnStart](SalesQuotationsServiceFilterReq.md#completedonstart)
- [consigneeClientId](SalesQuotationsServiceFilterReq.md#consigneeclientid)
- [count](SalesQuotationsServiceFilterReq.md#count)
- [creationTimestampEnd](SalesQuotationsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](SalesQuotationsServiceFilterReq.md#creationtimestampstart)
- [currencyId](SalesQuotationsServiceFilterReq.md#currencyid)
- [deliveryDateEnd](SalesQuotationsServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](SalesQuotationsServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](SalesQuotationsServiceFilterReq.md#deliverydatestart)
- [entityUuid](SalesQuotationsServiceFilterReq.md#entityuuid)
- [familyId](SalesQuotationsServiceFilterReq.md#familyid)
- [finalRefNumber](SalesQuotationsServiceFilterReq.md#finalrefnumber)
- [formData](SalesQuotationsServiceFilterReq.md#formdata)
- [isActive](SalesQuotationsServiceFilterReq.md#isactive)
- [locationId](SalesQuotationsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](SalesQuotationsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesQuotationsServiceFilterReq.md#modificationtimestampstart)
- [offset](SalesQuotationsServiceFilterReq.md#offset)
- [projectId](SalesQuotationsServiceFilterReq.md#projectid)
- [referenceId](SalesQuotationsServiceFilterReq.md#referenceid)
- [sortKey](SalesQuotationsServiceFilterReq.md#sortkey)
- [sortOrder](SalesQuotationsServiceFilterReq.md#sortorder)
- [status](SalesQuotationsServiceFilterReq.md#status)
- [fields](SalesQuotationsServiceFilterReq.md#fields)
- [runtime](SalesQuotationsServiceFilterReq.md#runtime)
- [typeName](SalesQuotationsServiceFilterReq.md#typename)

### Methods

- [clone](SalesQuotationsServiceFilterReq.md#clone)
- [equals](SalesQuotationsServiceFilterReq.md#equals)
- [fromBinary](SalesQuotationsServiceFilterReq.md#frombinary)
- [fromJson](SalesQuotationsServiceFilterReq.md#fromjson)
- [fromJsonString](SalesQuotationsServiceFilterReq.md#fromjsonstring)
- [getType](SalesQuotationsServiceFilterReq.md#gettype)
- [toBinary](SalesQuotationsServiceFilterReq.md#tobinary)
- [toJSON](SalesQuotationsServiceFilterReq.md#tojson)
- [toJson](SalesQuotationsServiceFilterReq.md#tojson-1)
- [toJsonString](SalesQuotationsServiceFilterReq.md#tojsonstring)
- [equals](SalesQuotationsServiceFilterReq.md#equals-1)
- [fromBinary](SalesQuotationsServiceFilterReq.md#frombinary-1)
- [fromJson](SalesQuotationsServiceFilterReq.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceFilterReq**(`data?`): [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\> |

#### Returns

[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Overrides

Message\&lt;SalesQuotationsServiceFilterReq\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:2158](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2158)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2051](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2051)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2044](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2044)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2037](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2037)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2058](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2058)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2100](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2100)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2072](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2072)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2065)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The associated consignee client ID

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2093](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2093)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1967](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L1967)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2002](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2002)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1995](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L1995)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2114](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2114)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2149](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2149)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2135](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2135)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2142](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2142)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2023](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2023)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2128](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2128)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2086](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2086)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2156](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2156)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1960](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L1960)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2107](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2107)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2016](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2016)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2009](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2009)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1974](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L1974)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2121](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2121)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales quotation

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2079](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2079)

___

### sortKey

• **sortKey**: [`SALES_QUOTATION_SORT_KEY`](../enums/SALES_QUOTATION_SORT_KEY.md) = `SALES_QUOTATION_SORT_KEY.SALES_QUOTATION_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_QUOTATION_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1988](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L1988)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1981](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L1981)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales quotation

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2030](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2030)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2165](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2165)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2163](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2163)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceFilterReq"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:2164](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2164)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md) \| `PlainMessage`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md) \| `PlainMessage`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md) \| `PlainMessage`\<[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2209](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2209)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2197](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2197)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2201](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2201)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceFilterReq`](SalesQuotationsServiceFilterReq.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2205](https://github.com/scailo/ts-sdk/blob/c43e0cf90919e087e4a7685eaddf6425d0b2f336/src/sales_quotations.scailo_pb.ts#L2205)

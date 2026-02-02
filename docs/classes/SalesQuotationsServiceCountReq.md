[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceCountReq

# Class: SalesQuotationsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.SalesQuotationsServiceCountReq

## Hierarchy

- `Message`\<[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)\>

  ↳ **`SalesQuotationsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SalesQuotationsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SalesQuotationsServiceCountReq.md#approvedonend)
- [approvedOnStart](SalesQuotationsServiceCountReq.md#approvedonstart)
- [approverRoleId](SalesQuotationsServiceCountReq.md#approverroleid)
- [buyerClientId](SalesQuotationsServiceCountReq.md#buyerclientid)
- [completedOnEnd](SalesQuotationsServiceCountReq.md#completedonend)
- [completedOnStart](SalesQuotationsServiceCountReq.md#completedonstart)
- [consigneeClientId](SalesQuotationsServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](SalesQuotationsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SalesQuotationsServiceCountReq.md#creationtimestampstart)
- [currencyId](SalesQuotationsServiceCountReq.md#currencyid)
- [deliveryDateEnd](SalesQuotationsServiceCountReq.md#deliverydateend)
- [deliveryDateExact](SalesQuotationsServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](SalesQuotationsServiceCountReq.md#deliverydatestart)
- [entityUuid](SalesQuotationsServiceCountReq.md#entityuuid)
- [familyId](SalesQuotationsServiceCountReq.md#familyid)
- [finalRefNumber](SalesQuotationsServiceCountReq.md#finalrefnumber)
- [formData](SalesQuotationsServiceCountReq.md#formdata)
- [isActive](SalesQuotationsServiceCountReq.md#isactive)
- [locationId](SalesQuotationsServiceCountReq.md#locationid)
- [modificationTimestampEnd](SalesQuotationsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesQuotationsServiceCountReq.md#modificationtimestampstart)
- [projectId](SalesQuotationsServiceCountReq.md#projectid)
- [referenceId](SalesQuotationsServiceCountReq.md#referenceid)
- [status](SalesQuotationsServiceCountReq.md#status)
- [fields](SalesQuotationsServiceCountReq.md#fields)
- [runtime](SalesQuotationsServiceCountReq.md#runtime)
- [typeName](SalesQuotationsServiceCountReq.md#typename)

### Methods

- [clone](SalesQuotationsServiceCountReq.md#clone)
- [equals](SalesQuotationsServiceCountReq.md#equals)
- [fromBinary](SalesQuotationsServiceCountReq.md#frombinary)
- [fromJson](SalesQuotationsServiceCountReq.md#fromjson)
- [fromJsonString](SalesQuotationsServiceCountReq.md#fromjsonstring)
- [getType](SalesQuotationsServiceCountReq.md#gettype)
- [toBinary](SalesQuotationsServiceCountReq.md#tobinary)
- [toJSON](SalesQuotationsServiceCountReq.md#tojson)
- [toJson](SalesQuotationsServiceCountReq.md#tojson-1)
- [toJsonString](SalesQuotationsServiceCountReq.md#tojsonstring)
- [equals](SalesQuotationsServiceCountReq.md#equals-1)
- [fromBinary](SalesQuotationsServiceCountReq.md#frombinary-1)
- [fromJson](SalesQuotationsServiceCountReq.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceCountReq**(`data?`): [`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)\> |

#### Returns

[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)

#### Overrides

Message\&lt;SalesQuotationsServiceCountReq\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:2396](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2396)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2289](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2289)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2282](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2282)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2275](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2275)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2296](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2296)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2338](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2338)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2310](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2310)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2303](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2303)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The associated consignee client ID

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2331](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2331)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2240](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2240)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2233](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2233)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2352](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2352)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2387](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2387)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2373](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2373)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the sales quotation

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2380](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2380)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2261](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2261)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2366](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2366)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2324](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2324)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2394](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2394)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2226](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2226)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2345](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2345)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2254](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2254)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2247](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2247)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2359](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2359)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales quotation

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2317](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2317)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales quotation

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2268](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2268)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2403](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2403)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2401](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2401)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceCountReq"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:2402](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2402)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md) \| `PlainMessage`\<[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md) \| `PlainMessage`\<[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md) \| `PlainMessage`\<[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2443](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2443)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2431](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2431)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2435](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2435)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceCountReq`](SalesQuotationsServiceCountReq.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2439](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/sales_quotations.scailo_pb.ts#L2439)

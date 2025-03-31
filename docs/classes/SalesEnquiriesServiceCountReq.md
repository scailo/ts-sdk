[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceCountReq

# Class: SalesEnquiriesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.SalesEnquiriesServiceCountReq

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\>

  ↳ **`SalesEnquiriesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SalesEnquiriesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SalesEnquiriesServiceCountReq.md#approvedonend)
- [approvedOnStart](SalesEnquiriesServiceCountReq.md#approvedonstart)
- [approverRoleId](SalesEnquiriesServiceCountReq.md#approverroleid)
- [buyerClientId](SalesEnquiriesServiceCountReq.md#buyerclientid)
- [completedOnEnd](SalesEnquiriesServiceCountReq.md#completedonend)
- [completedOnStart](SalesEnquiriesServiceCountReq.md#completedonstart)
- [consigneeClientId](SalesEnquiriesServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](SalesEnquiriesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SalesEnquiriesServiceCountReq.md#creationtimestampstart)
- [currencyId](SalesEnquiriesServiceCountReq.md#currencyid)
- [deliveryDateEnd](SalesEnquiriesServiceCountReq.md#deliverydateend)
- [deliveryDateExact](SalesEnquiriesServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](SalesEnquiriesServiceCountReq.md#deliverydatestart)
- [entityUuid](SalesEnquiriesServiceCountReq.md#entityuuid)
- [finalRefNumber](SalesEnquiriesServiceCountReq.md#finalrefnumber)
- [isActive](SalesEnquiriesServiceCountReq.md#isactive)
- [modificationTimestampEnd](SalesEnquiriesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesEnquiriesServiceCountReq.md#modificationtimestampstart)
- [priority](SalesEnquiriesServiceCountReq.md#priority)
- [referenceId](SalesEnquiriesServiceCountReq.md#referenceid)
- [status](SalesEnquiriesServiceCountReq.md#status)
- [fields](SalesEnquiriesServiceCountReq.md#fields)
- [runtime](SalesEnquiriesServiceCountReq.md#runtime)
- [typeName](SalesEnquiriesServiceCountReq.md#typename)

### Methods

- [clone](SalesEnquiriesServiceCountReq.md#clone)
- [equals](SalesEnquiriesServiceCountReq.md#equals)
- [fromBinary](SalesEnquiriesServiceCountReq.md#frombinary)
- [fromJson](SalesEnquiriesServiceCountReq.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceCountReq.md#fromjsonstring)
- [getType](SalesEnquiriesServiceCountReq.md#gettype)
- [toBinary](SalesEnquiriesServiceCountReq.md#tobinary)
- [toJSON](SalesEnquiriesServiceCountReq.md#tojson)
- [toJson](SalesEnquiriesServiceCountReq.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceCountReq.md#tojsonstring)
- [equals](SalesEnquiriesServiceCountReq.md#equals-1)
- [fromBinary](SalesEnquiriesServiceCountReq.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceCountReq.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceCountReq**(`data?`): [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\> |

#### Returns

[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceCountReq\&gt;.constructor

#### Defined in

src/sales_enquiries.scailo_pb.ts:2139

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2053

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2046

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2039

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2060

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2102

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2074

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2067

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2095

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2004

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1997

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2116

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_end = 43;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2137

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_exact = 41;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2123

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the sales enquiry

**`Generated`**

from field: string delivery_date_start = 42;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2130

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2025

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2088

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_enquiries.scailo_pb.ts:1990

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2018

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2011

___

### priority

• **priority**: `string` = `""`

The priority of the sales enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 24;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2109

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales enquiry

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2081

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales enquiry

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2032

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_enquiries.scailo_pb.ts:2146

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_enquiries.scailo_pb.ts:2144

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceCountReq"``

#### Defined in

src/sales_enquiries.scailo_pb.ts:2145

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_enquiries.scailo_pb.ts:2183

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:2171

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:2175

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Defined in

src/sales_enquiries.scailo_pb.ts:2179

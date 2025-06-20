[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceCountReq

# Class: SalesReturnsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.SalesReturnsServiceCountReq

## Hierarchy

- `Message`\<[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)\>

  ↳ **`SalesReturnsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SalesReturnsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SalesReturnsServiceCountReq.md#approvedonend)
- [approvedOnStart](SalesReturnsServiceCountReq.md#approvedonstart)
- [approverRoleId](SalesReturnsServiceCountReq.md#approverroleid)
- [billingStatus](SalesReturnsServiceCountReq.md#billingstatus)
- [buyerClientId](SalesReturnsServiceCountReq.md#buyerclientid)
- [completedOnEnd](SalesReturnsServiceCountReq.md#completedonend)
- [completedOnStart](SalesReturnsServiceCountReq.md#completedonstart)
- [consigneeClientId](SalesReturnsServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](SalesReturnsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SalesReturnsServiceCountReq.md#creationtimestampstart)
- [entityUuid](SalesReturnsServiceCountReq.md#entityuuid)
- [familyId](SalesReturnsServiceCountReq.md#familyid)
- [finalRefNumber](SalesReturnsServiceCountReq.md#finalrefnumber)
- [formData](SalesReturnsServiceCountReq.md#formdata)
- [isActive](SalesReturnsServiceCountReq.md#isactive)
- [locationId](SalesReturnsServiceCountReq.md#locationid)
- [modificationTimestampEnd](SalesReturnsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesReturnsServiceCountReq.md#modificationtimestampstart)
- [projectId](SalesReturnsServiceCountReq.md#projectid)
- [refFrom](SalesReturnsServiceCountReq.md#reffrom)
- [refId](SalesReturnsServiceCountReq.md#refid)
- [referenceId](SalesReturnsServiceCountReq.md#referenceid)
- [status](SalesReturnsServiceCountReq.md#status)
- [fields](SalesReturnsServiceCountReq.md#fields)
- [runtime](SalesReturnsServiceCountReq.md#runtime)
- [typeName](SalesReturnsServiceCountReq.md#typename)

### Methods

- [clone](SalesReturnsServiceCountReq.md#clone)
- [equals](SalesReturnsServiceCountReq.md#equals)
- [fromBinary](SalesReturnsServiceCountReq.md#frombinary)
- [fromJson](SalesReturnsServiceCountReq.md#fromjson)
- [fromJsonString](SalesReturnsServiceCountReq.md#fromjsonstring)
- [getType](SalesReturnsServiceCountReq.md#gettype)
- [toBinary](SalesReturnsServiceCountReq.md#tobinary)
- [toJSON](SalesReturnsServiceCountReq.md#tojson)
- [toJson](SalesReturnsServiceCountReq.md#tojson-1)
- [toJsonString](SalesReturnsServiceCountReq.md#tojsonstring)
- [equals](SalesReturnsServiceCountReq.md#equals-1)
- [fromBinary](SalesReturnsServiceCountReq.md#frombinary-1)
- [fromJson](SalesReturnsServiceCountReq.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceCountReq**(`data?`): [`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)\> |

#### Returns

[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)

#### Overrides

Message\&lt;SalesReturnsServiceCountReq\&gt;.constructor

#### Defined in

src/sales_returns.scailo_pb.ts:2005

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/sales_returns.scailo_pb.ts:1904

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/sales_returns.scailo_pb.ts:1897

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/sales_returns.scailo_pb.ts:1890

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/sales_returns.scailo_pb.ts:1911

___

### billingStatus

• **billingStatus**: [`SALES_RETURN_BILLING_STATUS`](../enums/SALES_RETURN_BILLING_STATUS.md) = `SALES_RETURN_BILLING_STATUS.SALES_RETURN_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the sales return bill

**`Generated`**

from field: Scailo.SALES_RETURN_BILLING_STATUS billing_status = 40;

#### Defined in

src/sales_returns.scailo_pb.ts:1967

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 61;

#### Defined in

src/sales_returns.scailo_pb.ts:1989

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/sales_returns.scailo_pb.ts:1925

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/sales_returns.scailo_pb.ts:1918

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 60;

#### Defined in

src/sales_returns.scailo_pb.ts:1982

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/sales_returns.scailo_pb.ts:1855

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/sales_returns.scailo_pb.ts:1848

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/sales_returns.scailo_pb.ts:1876

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 50;

#### Defined in

src/sales_returns.scailo_pb.ts:1974

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/sales_returns.scailo_pb.ts:1939

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/sales_returns.scailo_pb.ts:2003

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_returns.scailo_pb.ts:1841

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/sales_returns.scailo_pb.ts:1960

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/sales_returns.scailo_pb.ts:1869

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/sales_returns.scailo_pb.ts:1862

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 62;

#### Defined in

src/sales_returns.scailo_pb.ts:1996

___

### refFrom

• **refFrom**: [`SALES_RETURN_REF_FROM`](../enums/SALES_RETURN_REF_FROM.md) = `SALES_RETURN_REF_FROM.SALES_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.SALES_RETURN_REF_FROM ref_from = 22;

#### Defined in

src/sales_returns.scailo_pb.ts:1946

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/sales_returns.scailo_pb.ts:1953

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales return

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/sales_returns.scailo_pb.ts:1932

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales return

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/sales_returns.scailo_pb.ts:1883

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_returns.scailo_pb.ts:2012

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_returns.scailo_pb.ts:2010

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnsServiceCountReq"``

#### Defined in

src/sales_returns.scailo_pb.ts:2011

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md) \| `PlainMessage`\<[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md) \| `PlainMessage`\<[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md) \| `PlainMessage`\<[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_returns.scailo_pb.ts:2051

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)

#### Defined in

src/sales_returns.scailo_pb.ts:2039

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)

#### Defined in

src/sales_returns.scailo_pb.ts:2043

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceCountReq`](SalesReturnsServiceCountReq.md)

#### Defined in

src/sales_returns.scailo_pb.ts:2047

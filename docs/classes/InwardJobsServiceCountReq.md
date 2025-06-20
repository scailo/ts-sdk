[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceCountReq

# Class: InwardJobsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.InwardJobsServiceCountReq

## Hierarchy

- `Message`\<[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)\>

  ↳ **`InwardJobsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](InwardJobsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](InwardJobsServiceCountReq.md#approvedonend)
- [approvedOnStart](InwardJobsServiceCountReq.md#approvedonstart)
- [approverRoleId](InwardJobsServiceCountReq.md#approverroleid)
- [buyerClientId](InwardJobsServiceCountReq.md#buyerclientid)
- [completedOnEnd](InwardJobsServiceCountReq.md#completedonend)
- [completedOnStart](InwardJobsServiceCountReq.md#completedonstart)
- [consigneeClientId](InwardJobsServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](InwardJobsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](InwardJobsServiceCountReq.md#creationtimestampstart)
- [deliveryDateEnd](InwardJobsServiceCountReq.md#deliverydateend)
- [deliveryDateExact](InwardJobsServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](InwardJobsServiceCountReq.md#deliverydatestart)
- [entityUuid](InwardJobsServiceCountReq.md#entityuuid)
- [finalRefNumber](InwardJobsServiceCountReq.md#finalrefnumber)
- [formData](InwardJobsServiceCountReq.md#formdata)
- [isActive](InwardJobsServiceCountReq.md#isactive)
- [locationId](InwardJobsServiceCountReq.md#locationid)
- [modificationTimestampEnd](InwardJobsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](InwardJobsServiceCountReq.md#modificationtimestampstart)
- [outwardFamilyId](InwardJobsServiceCountReq.md#outwardfamilyid)
- [projectId](InwardJobsServiceCountReq.md#projectid)
- [referenceId](InwardJobsServiceCountReq.md#referenceid)
- [status](InwardJobsServiceCountReq.md#status)
- [fields](InwardJobsServiceCountReq.md#fields)
- [runtime](InwardJobsServiceCountReq.md#runtime)
- [typeName](InwardJobsServiceCountReq.md#typename)

### Methods

- [clone](InwardJobsServiceCountReq.md#clone)
- [equals](InwardJobsServiceCountReq.md#equals)
- [fromBinary](InwardJobsServiceCountReq.md#frombinary)
- [fromJson](InwardJobsServiceCountReq.md#fromjson)
- [fromJsonString](InwardJobsServiceCountReq.md#fromjsonstring)
- [getType](InwardJobsServiceCountReq.md#gettype)
- [toBinary](InwardJobsServiceCountReq.md#tobinary)
- [toJSON](InwardJobsServiceCountReq.md#tojson)
- [toJson](InwardJobsServiceCountReq.md#tojson-1)
- [toJsonString](InwardJobsServiceCountReq.md#tojsonstring)
- [equals](InwardJobsServiceCountReq.md#equals-1)
- [fromBinary](InwardJobsServiceCountReq.md#frombinary-1)
- [fromJson](InwardJobsServiceCountReq.md#fromjson-1)
- [fromJsonString](InwardJobsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceCountReq**(`data?`): [`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)\> |

#### Returns

[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)

#### Overrides

Message\&lt;InwardJobsServiceCountReq\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:2107

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/inward_jobs.scailo_pb.ts:2007

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/inward_jobs.scailo_pb.ts:2000

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/inward_jobs.scailo_pb.ts:1993

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/inward_jobs.scailo_pb.ts:2014

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

src/inward_jobs.scailo_pb.ts:2077

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/inward_jobs.scailo_pb.ts:2028

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/inward_jobs.scailo_pb.ts:2021

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The associated consignee client ID

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

src/inward_jobs.scailo_pb.ts:2070

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/inward_jobs.scailo_pb.ts:1958

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/inward_jobs.scailo_pb.ts:1951

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the inward job (on the basis of the delivery dates of the outward items)

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

src/inward_jobs.scailo_pb.ts:2049

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the inward job (on the basis of the delivery dates of the outward items)

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

src/inward_jobs.scailo_pb.ts:2035

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the inward job (on the basis of the delivery dates of the outward items)

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

src/inward_jobs.scailo_pb.ts:2042

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/inward_jobs.scailo_pb.ts:1979

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/inward_jobs.scailo_pb.ts:2063

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/inward_jobs.scailo_pb.ts:2105

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:1944

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

src/inward_jobs.scailo_pb.ts:2084

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/inward_jobs.scailo_pb.ts:1972

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/inward_jobs.scailo_pb.ts:1965

___

### outwardFamilyId

• **outwardFamilyId**: `bigint` = `protoInt64.zero`

The ID of the outward family

**`Generated`**

from field: uint64 outward_family_id = 30;

#### Defined in

src/inward_jobs.scailo_pb.ts:2098

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 25;

#### Defined in

src/inward_jobs.scailo_pb.ts:2091

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the inward job

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/inward_jobs.scailo_pb.ts:2056

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this inward job

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/inward_jobs.scailo_pb.ts:1986

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:2114

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:2112

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceCountReq"``

#### Defined in

src/inward_jobs.scailo_pb.ts:2113

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md) \| `PlainMessage`\<[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md) \| `PlainMessage`\<[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md) \| `PlainMessage`\<[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:2153

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2141

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2145

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceCountReq`](InwardJobsServiceCountReq.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2149

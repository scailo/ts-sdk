[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceCountReq

# Class: CreditNotesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.CreditNotesServiceCountReq

## Hierarchy

- `Message`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\>

  ↳ **`CreditNotesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](CreditNotesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](CreditNotesServiceCountReq.md#approvedonend)
- [approvedOnStart](CreditNotesServiceCountReq.md#approvedonstart)
- [approverRoleId](CreditNotesServiceCountReq.md#approverroleid)
- [bankAccountId](CreditNotesServiceCountReq.md#bankaccountid)
- [buyerClientId](CreditNotesServiceCountReq.md#buyerclientid)
- [completedOnEnd](CreditNotesServiceCountReq.md#completedonend)
- [completedOnStart](CreditNotesServiceCountReq.md#completedonstart)
- [consigneeClientId](CreditNotesServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](CreditNotesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](CreditNotesServiceCountReq.md#creationtimestampstart)
- [currencyId](CreditNotesServiceCountReq.md#currencyid)
- [entityUuid](CreditNotesServiceCountReq.md#entityuuid)
- [familyId](CreditNotesServiceCountReq.md#familyid)
- [finalRefNumber](CreditNotesServiceCountReq.md#finalrefnumber)
- [formData](CreditNotesServiceCountReq.md#formdata)
- [isActive](CreditNotesServiceCountReq.md#isactive)
- [modificationTimestampEnd](CreditNotesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](CreditNotesServiceCountReq.md#modificationtimestampstart)
- [projectId](CreditNotesServiceCountReq.md#projectid)
- [refFrom](CreditNotesServiceCountReq.md#reffrom)
- [refId](CreditNotesServiceCountReq.md#refid)
- [referenceId](CreditNotesServiceCountReq.md#referenceid)
- [status](CreditNotesServiceCountReq.md#status)
- [totalValueMax](CreditNotesServiceCountReq.md#totalvaluemax)
- [totalValueMin](CreditNotesServiceCountReq.md#totalvaluemin)
- [fields](CreditNotesServiceCountReq.md#fields)
- [runtime](CreditNotesServiceCountReq.md#runtime)
- [typeName](CreditNotesServiceCountReq.md#typename)

### Methods

- [clone](CreditNotesServiceCountReq.md#clone)
- [equals](CreditNotesServiceCountReq.md#equals)
- [fromBinary](CreditNotesServiceCountReq.md#frombinary)
- [fromJson](CreditNotesServiceCountReq.md#fromjson)
- [fromJsonString](CreditNotesServiceCountReq.md#fromjsonstring)
- [getType](CreditNotesServiceCountReq.md#gettype)
- [toBinary](CreditNotesServiceCountReq.md#tobinary)
- [toJSON](CreditNotesServiceCountReq.md#tojson)
- [toJson](CreditNotesServiceCountReq.md#tojson-1)
- [toJsonString](CreditNotesServiceCountReq.md#tojsonstring)
- [equals](CreditNotesServiceCountReq.md#equals-1)
- [fromBinary](CreditNotesServiceCountReq.md#frombinary-1)
- [fromJson](CreditNotesServiceCountReq.md#fromjson-1)
- [fromJsonString](CreditNotesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceCountReq**(`data?`): [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\> |

#### Returns

[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Overrides

Message\&lt;CreditNotesServiceCountReq\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:2298

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/credit_notes.scailo_pb.ts:2183

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/credit_notes.scailo_pb.ts:2176

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/credit_notes.scailo_pb.ts:2169

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/credit_notes.scailo_pb.ts:2190

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

src/credit_notes.scailo_pb.ts:2246

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

src/credit_notes.scailo_pb.ts:2268

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/credit_notes.scailo_pb.ts:2204

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/credit_notes.scailo_pb.ts:2197

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

src/credit_notes.scailo_pb.ts:2261

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/credit_notes.scailo_pb.ts:2134

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/credit_notes.scailo_pb.ts:2127

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 24;

#### Defined in

src/credit_notes.scailo_pb.ts:2239

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/credit_notes.scailo_pb.ts:2155

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/credit_notes.scailo_pb.ts:2253

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/credit_notes.scailo_pb.ts:2218

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

src/credit_notes.scailo_pb.ts:2296

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:2120

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/credit_notes.scailo_pb.ts:2148

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/credit_notes.scailo_pb.ts:2141

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project of the linked sales order

**`Generated`**

from field: uint64 project_id = 52;

#### Defined in

src/credit_notes.scailo_pb.ts:2275

___

### refFrom

• **refFrom**: [`CREDIT_NOTE_REF_FROM`](../enums/CREDIT_NOTE_REF_FROM.md) = `CREDIT_NOTE_REF_FROM.CREDIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 22;

#### Defined in

src/credit_notes.scailo_pb.ts:2225

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/credit_notes.scailo_pb.ts:2232

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the credit note

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/credit_notes.scailo_pb.ts:2211

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this credit note

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/credit_notes.scailo_pb.ts:2162

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the credit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 71;

#### Defined in

src/credit_notes.scailo_pb.ts:2289

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the credit note (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 70;

#### Defined in

src/credit_notes.scailo_pb.ts:2282

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:2305

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:2303

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceCountReq"``

#### Defined in

src/credit_notes.scailo_pb.ts:2304

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md) \| `PlainMessage`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md) \| `PlainMessage`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md) \| `PlainMessage`\<[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:2346

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2334

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2338

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceCountReq`](CreditNotesServiceCountReq.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2342

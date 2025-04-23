[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorInvoicesServiceCountReq

# Class: VendorInvoicesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.VendorInvoicesServiceCountReq

## Hierarchy

- `Message`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\>

  ↳ **`VendorInvoicesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](VendorInvoicesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](VendorInvoicesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](VendorInvoicesServiceCountReq.md#approvedonend)
- [approvedOnStart](VendorInvoicesServiceCountReq.md#approvedonstart)
- [approverRoleId](VendorInvoicesServiceCountReq.md#approverroleid)
- [completedOnEnd](VendorInvoicesServiceCountReq.md#completedonend)
- [completedOnStart](VendorInvoicesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](VendorInvoicesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](VendorInvoicesServiceCountReq.md#creationtimestampstart)
- [currencyId](VendorInvoicesServiceCountReq.md#currencyid)
- [entityUuid](VendorInvoicesServiceCountReq.md#entityuuid)
- [familyId](VendorInvoicesServiceCountReq.md#familyid)
- [finalRefNumber](VendorInvoicesServiceCountReq.md#finalrefnumber)
- [isActive](VendorInvoicesServiceCountReq.md#isactive)
- [modificationTimestampEnd](VendorInvoicesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](VendorInvoicesServiceCountReq.md#modificationtimestampstart)
- [projectId](VendorInvoicesServiceCountReq.md#projectid)
- [refFrom](VendorInvoicesServiceCountReq.md#reffrom)
- [refId](VendorInvoicesServiceCountReq.md#refid)
- [referenceId](VendorInvoicesServiceCountReq.md#referenceid)
- [status](VendorInvoicesServiceCountReq.md#status)
- [totalValueMax](VendorInvoicesServiceCountReq.md#totalvaluemax)
- [totalValueMin](VendorInvoicesServiceCountReq.md#totalvaluemin)
- [vendorBillDateEnd](VendorInvoicesServiceCountReq.md#vendorbilldateend)
- [vendorBillDateExact](VendorInvoicesServiceCountReq.md#vendorbilldateexact)
- [vendorBillDateStart](VendorInvoicesServiceCountReq.md#vendorbilldatestart)
- [vendorBillNo](VendorInvoicesServiceCountReq.md#vendorbillno)
- [vendorId](VendorInvoicesServiceCountReq.md#vendorid)
- [fields](VendorInvoicesServiceCountReq.md#fields)
- [runtime](VendorInvoicesServiceCountReq.md#runtime)
- [typeName](VendorInvoicesServiceCountReq.md#typename)

### Methods

- [clone](VendorInvoicesServiceCountReq.md#clone)
- [equals](VendorInvoicesServiceCountReq.md#equals)
- [fromBinary](VendorInvoicesServiceCountReq.md#frombinary)
- [fromJson](VendorInvoicesServiceCountReq.md#fromjson)
- [fromJsonString](VendorInvoicesServiceCountReq.md#fromjsonstring)
- [getType](VendorInvoicesServiceCountReq.md#gettype)
- [toBinary](VendorInvoicesServiceCountReq.md#tobinary)
- [toJSON](VendorInvoicesServiceCountReq.md#tojson)
- [toJson](VendorInvoicesServiceCountReq.md#tojson-1)
- [toJsonString](VendorInvoicesServiceCountReq.md#tojsonstring)
- [equals](VendorInvoicesServiceCountReq.md#equals-1)
- [fromBinary](VendorInvoicesServiceCountReq.md#frombinary-1)
- [fromJson](VendorInvoicesServiceCountReq.md#fromjson-1)
- [fromJsonString](VendorInvoicesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorInvoicesServiceCountReq**(`data?`): [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\> |

#### Returns

[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Overrides

Message\&lt;VendorInvoicesServiceCountReq\&gt;.constructor

#### Defined in

src/vendor_invoices.scailo_pb.ts:2142

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2021

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2014

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2007

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2028

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2042

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2035

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1972

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1965

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 30;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2105

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1993

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2126

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2056

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1958

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1986

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/vendor_invoices.scailo_pb.ts:1979

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 32;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2119

___

### refFrom

• **refFrom**: [`VENDOR_INVOICE_REF_FROM`](../enums/VENDOR_INVOICE_REF_FROM.md) = `VENDOR_INVOICE_REF_FROM.VENDOR_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.VENDOR_INVOICE_REF_FROM ref_from = 22;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2063

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2070

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the vendor invoice

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2049

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this vendor invoice

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2000

___

### totalValueMax

• **totalValueMax**: `bigint` = `protoInt64.zero`

Stores the maximum value of the vendor invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_max = 51;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2140

___

### totalValueMin

• **totalValueMin**: `bigint` = `protoInt64.zero`

Stores the minimum value of the vendor invoice (ignored if 0)

**`Generated`**

from field: uint64 total_value_min = 50;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2133

___

### vendorBillDateEnd

• **vendorBillDateEnd**: `string` = `""`

The maximum vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_end = 26;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2091

___

### vendorBillDateExact

• **vendorBillDateExact**: `string` = `""`

The exact vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_exact = 27;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2098

___

### vendorBillDateStart

• **vendorBillDateStart**: `string` = `""`

The minimum vendor bill date which should be considered

**`Generated`**

from field: string vendor_bill_date_start = 25;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2084

___

### vendorBillNo

• **vendorBillNo**: `string` = `""`

The vendor's bill number

**`Generated`**

from field: string vendor_bill_no = 24;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2077

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 31;

#### Defined in

src/vendor_invoices.scailo_pb.ts:2112

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2149

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2147

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorInvoicesServiceCountReq"``

#### Defined in

src/vendor_invoices.scailo_pb.ts:2148

## Methods

### clone

▸ **clone**(): [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

Create a deep copy.

#### Returns

[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\> |
| `b` | `undefined` \| [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md) \| `PlainMessage`\<[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_invoices.scailo_pb.ts:2191

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2179

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2183

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorInvoicesServiceCountReq`](VendorInvoicesServiceCountReq.md)

#### Defined in

src/vendor_invoices.scailo_pb.ts:2187

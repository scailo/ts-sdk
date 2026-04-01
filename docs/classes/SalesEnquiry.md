[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiry

# Class: SalesEnquiry

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.SalesEnquiry

## Hierarchy

- `Message`\<[`SalesEnquiry`](SalesEnquiry.md)\>

  ↳ **`SalesEnquiry`**

## Table of contents

### Constructors

- [constructor](SalesEnquiry.md#constructor)

### Properties

- [amendmentCount](SalesEnquiry.md#amendmentcount)
- [approvalMetadata](SalesEnquiry.md#approvalmetadata)
- [buyerClientId](SalesEnquiry.md#buyerclientid)
- [completedOn](SalesEnquiry.md#completedon)
- [consigneeClientId](SalesEnquiry.md#consigneeclientid)
- [currencyId](SalesEnquiry.md#currencyid)
- [description](SalesEnquiry.md#description)
- [entityUuid](SalesEnquiry.md#entityuuid)
- [finalRefNumber](SalesEnquiry.md#finalrefnumber)
- [formData](SalesEnquiry.md#formdata)
- [list](SalesEnquiry.md#list)
- [logs](SalesEnquiry.md#logs)
- [metadata](SalesEnquiry.md#metadata)
- [miscellaneousCost](SalesEnquiry.md#miscellaneouscost)
- [overallDiscount](SalesEnquiry.md#overalldiscount)
- [priority](SalesEnquiry.md#priority)
- [referenceId](SalesEnquiry.md#referenceid)
- [roundOff](SalesEnquiry.md#roundoff)
- [status](SalesEnquiry.md#status)
- [totalPrice](SalesEnquiry.md#totalprice)
- [vaultFolderId](SalesEnquiry.md#vaultfolderid)
- [fields](SalesEnquiry.md#fields)
- [runtime](SalesEnquiry.md#runtime)
- [typeName](SalesEnquiry.md#typename)

### Methods

- [clone](SalesEnquiry.md#clone)
- [equals](SalesEnquiry.md#equals)
- [fromBinary](SalesEnquiry.md#frombinary)
- [fromJson](SalesEnquiry.md#fromjson)
- [fromJsonString](SalesEnquiry.md#fromjsonstring)
- [getType](SalesEnquiry.md#gettype)
- [toBinary](SalesEnquiry.md#tobinary)
- [toJSON](SalesEnquiry.md#tojson)
- [toJson](SalesEnquiry.md#tojson-1)
- [toJsonString](SalesEnquiry.md#tojsonstring)
- [equals](SalesEnquiry.md#equals-1)
- [fromBinary](SalesEnquiry.md#frombinary-1)
- [fromJson](SalesEnquiry.md#fromjson-1)
- [fromJsonString](SalesEnquiry.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiry**(`data?`): [`SalesEnquiry`](SalesEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiry`](SalesEnquiry.md)\> |

#### Returns

[`SalesEnquiry`](SalesEnquiry.md)

#### Overrides

Message\&lt;SalesEnquiry\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:825](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L825)

## Properties

### amendmentCount

• **amendmentCount**: `bigint` = `protoInt64.zero`

The number of times that the sales enquiry has been amended

**`Generated`**

from field: uint64 amendment_count = 20;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:802](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L802)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L683)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:753](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L753)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

**`Description`**

UNIX timestamp of when the record transitioned to the COMPLETED state.

**`Example`**

```ts
1698400000
```

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:709](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L709)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:746](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L746)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:767](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L767)

___

### description

• **description**: `string` = `""`

The description of the sales enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:774](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L774)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:667](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L667)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Description`**

The system-generated immutable reference number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:739](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L739)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 40;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L816)

___

### list

• **list**: [`SalesEnquiryItem`](SalesEnquiryItem.md)[] = `[]`

The list of associated sales enquiry items

**`Generated`**

from field: repeated Scailo.SalesEnquiryItem list = 30;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L809)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L699)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:675](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L675)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

The miscellaneous cost (in cents)

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:781](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L781)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The overall discount (in cents)

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:788](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L788)

___

### priority

• **priority**: `string` = `""`

The priority of the sales enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:760](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L760)

___

### referenceId

• **referenceId**: `string` = `""`

**`Description`**

The user-provided reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L729)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The round off amount (in cents)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:795](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L795)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L691)

___

### totalPrice

• **totalPrice**: `number` = `0`

The total price of the sales enquiry

**`Generated`**

from field: double total_price = 50;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L823)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L719)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L832)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:830](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L830)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiry"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:831](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L831)

## Methods

### clone

▸ **clone**(): [`SalesEnquiry`](SalesEnquiry.md)

Create a deep copy.

#### Returns

[`SalesEnquiry`](SalesEnquiry.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiry`](SalesEnquiry.md) \| `PlainMessage`\<[`SalesEnquiry`](SalesEnquiry.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiry`](SalesEnquiry.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiry`](SalesEnquiry.md)\>

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
| `a` | `undefined` \| [`SalesEnquiry`](SalesEnquiry.md) \| `PlainMessage`\<[`SalesEnquiry`](SalesEnquiry.md)\> |
| `b` | `undefined` \| [`SalesEnquiry`](SalesEnquiry.md) \| `PlainMessage`\<[`SalesEnquiry`](SalesEnquiry.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L868)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiry`](SalesEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiry`](SalesEnquiry.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:856](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L856)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiry`](SalesEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiry`](SalesEnquiry.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L860)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiry`](SalesEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiry`](SalesEnquiry.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/sales_enquiries.scailo_pb.ts#L864)

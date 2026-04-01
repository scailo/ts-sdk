[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationRequest

# Class: QuotationRequest

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.QuotationRequest

## Hierarchy

- `Message`\<[`QuotationRequest`](QuotationRequest.md)\>

  ↳ **`QuotationRequest`**

## Table of contents

### Constructors

- [constructor](QuotationRequest.md#constructor)

### Properties

- [approvalMetadata](QuotationRequest.md#approvalmetadata)
- [completedOn](QuotationRequest.md#completedon)
- [currencyId](QuotationRequest.md#currencyid)
- [description](QuotationRequest.md#description)
- [entityUuid](QuotationRequest.md#entityuuid)
- [finalRefNumber](QuotationRequest.md#finalrefnumber)
- [formData](QuotationRequest.md#formdata)
- [lastDate](QuotationRequest.md#lastdate)
- [list](QuotationRequest.md#list)
- [logs](QuotationRequest.md#logs)
- [metadata](QuotationRequest.md#metadata)
- [priority](QuotationRequest.md#priority)
- [purchaseEnquiryId](QuotationRequest.md#purchaseenquiryid)
- [referenceId](QuotationRequest.md#referenceid)
- [renewalPeriod](QuotationRequest.md#renewalperiod)
- [status](QuotationRequest.md#status)
- [totalValue](QuotationRequest.md#totalvalue)
- [vaultFolderId](QuotationRequest.md#vaultfolderid)
- [fields](QuotationRequest.md#fields)
- [runtime](QuotationRequest.md#runtime)
- [typeName](QuotationRequest.md#typename)

### Methods

- [clone](QuotationRequest.md#clone)
- [equals](QuotationRequest.md#equals)
- [fromBinary](QuotationRequest.md#frombinary)
- [fromJson](QuotationRequest.md#fromjson)
- [fromJsonString](QuotationRequest.md#fromjsonstring)
- [getType](QuotationRequest.md#gettype)
- [toBinary](QuotationRequest.md#tobinary)
- [toJSON](QuotationRequest.md#tojson)
- [toJson](QuotationRequest.md#tojson-1)
- [toJsonString](QuotationRequest.md#tojsonstring)
- [equals](QuotationRequest.md#equals-1)
- [fromBinary](QuotationRequest.md#frombinary-1)
- [fromJson](QuotationRequest.md#fromjson-1)
- [fromJsonString](QuotationRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationRequest**(`data?`): [`QuotationRequest`](QuotationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationRequest`](QuotationRequest.md)\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Overrides

Message\&lt;QuotationRequest\&gt;.constructor

#### Defined in

[src/quotations_requests.scailo_pb.ts:774](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L774)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/quotations_requests.scailo_pb.ts:653](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L653)

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

[src/quotations_requests.scailo_pb.ts:679](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L679)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/quotations_requests.scailo_pb.ts:730](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L730)

___

### description

• **description**: `string` = `""`

The description of the quotation request

**`Generated`**

from field: string description = 17;

#### Defined in

[src/quotations_requests.scailo_pb.ts:751](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L751)

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

[src/quotations_requests.scailo_pb.ts:637](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L637)

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

[src/quotations_requests.scailo_pb.ts:709](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L709)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/quotations_requests.scailo_pb.ts:765](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L765)

___

### lastDate

• **lastDate**: `string` = `""`

The date until which quotations responses can be sent

**`Generated`**

from field: string last_date = 13;

#### Defined in

[src/quotations_requests.scailo_pb.ts:723](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L723)

___

### list

• **list**: [`QuotationRequestItem`](QuotationRequestItem.md)[] = `[]`

The list of associated quotation request items

**`Generated`**

from field: repeated Scailo.QuotationRequestItem list = 20;

#### Defined in

[src/quotations_requests.scailo_pb.ts:758](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L758)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/quotations_requests.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L669)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/quotations_requests.scailo_pb.ts:645](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L645)

___

### priority

• **priority**: `string` = `""`

The priority of the quotation request. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 16;

#### Defined in

[src/quotations_requests.scailo_pb.ts:744](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L744)

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

The associated purchase enquiry

**`Generated`**

from field: uint64 purchase_enquiry_id = 12;

#### Defined in

[src/quotations_requests.scailo_pb.ts:716](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L716)

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

[src/quotations_requests.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L699)

___

### renewalPeriod

• **renewalPeriod**: `bigint` = `protoInt64.zero`

The number of days until which the quotation request is valid

**`Generated`**

from field: uint64 renewal_period = 15;

#### Defined in

[src/quotations_requests.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L737)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/quotations_requests.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L661)

___

### totalValue

• **totalValue**: `number` = `0`

Stores the total value of the quotation request (as a double, which requires no adjustments)

**`Generated`**

from field: double total_value = 50;

#### Defined in

[src/quotations_requests.scailo_pb.ts:772](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L772)

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

[src/quotations_requests.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L689)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests.scailo_pb.ts:781](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L781)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests.scailo_pb.ts:779](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L779)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationRequest"``

#### Defined in

[src/quotations_requests.scailo_pb.ts:780](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L780)

## Methods

### clone

▸ **clone**(): [`QuotationRequest`](QuotationRequest.md)

Create a deep copy.

#### Returns

[`QuotationRequest`](QuotationRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationRequest`](QuotationRequest.md) \| `PlainMessage`\<[`QuotationRequest`](QuotationRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationRequest`](QuotationRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationRequest`](QuotationRequest.md)\>

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
| `a` | `undefined` \| [`QuotationRequest`](QuotationRequest.md) \| `PlainMessage`\<[`QuotationRequest`](QuotationRequest.md)\> |
| `b` | `undefined` \| [`QuotationRequest`](QuotationRequest.md) \| `PlainMessage`\<[`QuotationRequest`](QuotationRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests.scailo_pb.ts:814](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L814)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationRequest`](QuotationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:802](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L802)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationRequest`](QuotationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:806](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L806)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationRequest`](QuotationRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequest`](QuotationRequest.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:810](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/quotations_requests.scailo_pb.ts#L810)

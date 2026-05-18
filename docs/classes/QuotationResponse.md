[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationResponse

# Class: QuotationResponse

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.QuotationResponse

## Hierarchy

- `Message`\<[`QuotationResponse`](QuotationResponse.md)\>

  ↳ **`QuotationResponse`**

## Table of contents

### Constructors

- [constructor](QuotationResponse.md#constructor)

### Properties

- [approvalMetadata](QuotationResponse.md#approvalmetadata)
- [completedOn](QuotationResponse.md#completedon)
- [currencyId](QuotationResponse.md#currencyid)
- [description](QuotationResponse.md#description)
- [entityUuid](QuotationResponse.md#entityuuid)
- [finalRefNumber](QuotationResponse.md#finalrefnumber)
- [formData](QuotationResponse.md#formdata)
- [list](QuotationResponse.md#list)
- [logs](QuotationResponse.md#logs)
- [metadata](QuotationResponse.md#metadata)
- [quotationRequestId](QuotationResponse.md#quotationrequestid)
- [refFrom](QuotationResponse.md#reffrom)
- [refId](QuotationResponse.md#refid)
- [referenceId](QuotationResponse.md#referenceid)
- [status](QuotationResponse.md#status)
- [vaultFolderId](QuotationResponse.md#vaultfolderid)
- [fields](QuotationResponse.md#fields)
- [runtime](QuotationResponse.md#runtime)
- [typeName](QuotationResponse.md#typename)

### Methods

- [clone](QuotationResponse.md#clone)
- [equals](QuotationResponse.md#equals)
- [fromBinary](QuotationResponse.md#frombinary)
- [fromJson](QuotationResponse.md#fromjson)
- [fromJsonString](QuotationResponse.md#fromjsonstring)
- [getType](QuotationResponse.md#gettype)
- [toBinary](QuotationResponse.md#tobinary)
- [toJSON](QuotationResponse.md#tojson)
- [toJson](QuotationResponse.md#tojson-1)
- [toJsonString](QuotationResponse.md#tojsonstring)
- [equals](QuotationResponse.md#equals-1)
- [fromBinary](QuotationResponse.md#frombinary-1)
- [fromJson](QuotationResponse.md#fromjson-1)
- [fromJsonString](QuotationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationResponse**(`data?`): [`QuotationResponse`](QuotationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationResponse`](QuotationResponse.md)\> |

#### Returns

[`QuotationResponse`](QuotationResponse.md)

#### Overrides

Message\&lt;QuotationResponse\&gt;.constructor

#### Defined in

[src/quotations_responses.scailo_pb.ts:678](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L678)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/quotations_responses.scailo_pb.ts:571](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L571)

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

[src/quotations_responses.scailo_pb.ts:597](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L597)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/quotations_responses.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L655)

___

### description

• **description**: `string` = `""`

The description of the quotation response

**`Generated`**

from field: string description = 16;

#### Defined in

[src/quotations_responses.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L662)

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

[src/quotations_responses.scailo_pb.ts:555](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L555)

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

[src/quotations_responses.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L627)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/quotations_responses.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L676)

___

### list

• **list**: [`QuotationResponseItem`](QuotationResponseItem.md)[] = `[]`

The list of associated quotation response items

**`Generated`**

from field: repeated Scailo.QuotationResponseItem list = 20;

#### Defined in

[src/quotations_responses.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L669)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/quotations_responses.scailo_pb.ts:587](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L587)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/quotations_responses.scailo_pb.ts:563](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L563)

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

The associated quotation request

**`Generated`**

from field: uint64 quotation_request_id = 12;

#### Defined in

[src/quotations_responses.scailo_pb.ts:634](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L634)

___

### refFrom

• **refFrom**: `string` = `""`

The associated party type

**`Generated`**

from field: string ref_from = 13;

#### Defined in

[src/quotations_responses.scailo_pb.ts:641](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L641)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated party ID

**`Generated`**

from field: uint64 ref_id = 14;

#### Defined in

[src/quotations_responses.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L648)

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

[src/quotations_responses.scailo_pb.ts:617](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L617)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/quotations_responses.scailo_pb.ts:579](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L579)

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

[src/quotations_responses.scailo_pb.ts:607](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L607)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses.scailo_pb.ts:685](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L685)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L683)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationResponse"``

#### Defined in

[src/quotations_responses.scailo_pb.ts:684](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L684)

## Methods

### clone

▸ **clone**(): [`QuotationResponse`](QuotationResponse.md)

Create a deep copy.

#### Returns

[`QuotationResponse`](QuotationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationResponse`](QuotationResponse.md) \| `PlainMessage`\<[`QuotationResponse`](QuotationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationResponse`](QuotationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationResponse`](QuotationResponse.md)\>

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
| `a` | `undefined` \| [`QuotationResponse`](QuotationResponse.md) \| `PlainMessage`\<[`QuotationResponse`](QuotationResponse.md)\> |
| `b` | `undefined` \| [`QuotationResponse`](QuotationResponse.md) \| `PlainMessage`\<[`QuotationResponse`](QuotationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses.scailo_pb.ts:716](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L716)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationResponse`](QuotationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationResponse`](QuotationResponse.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:704](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L704)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationResponse`](QuotationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationResponse`](QuotationResponse.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:708](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L708)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationResponse`](QuotationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationResponse`](QuotationResponse.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:712](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L712)

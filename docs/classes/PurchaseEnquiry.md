[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseEnquiry

# Class: PurchaseEnquiry

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.PurchaseEnquiry

## Hierarchy

- `Message`\<[`PurchaseEnquiry`](PurchaseEnquiry.md)\>

  ↳ **`PurchaseEnquiry`**

## Table of contents

### Constructors

- [constructor](PurchaseEnquiry.md#constructor)

### Properties

- [approvalMetadata](PurchaseEnquiry.md#approvalmetadata)
- [completedOn](PurchaseEnquiry.md#completedon)
- [description](PurchaseEnquiry.md#description)
- [entityUuid](PurchaseEnquiry.md#entityuuid)
- [finalRefNumber](PurchaseEnquiry.md#finalrefnumber)
- [formData](PurchaseEnquiry.md#formdata)
- [list](PurchaseEnquiry.md#list)
- [logs](PurchaseEnquiry.md#logs)
- [metadata](PurchaseEnquiry.md#metadata)
- [priority](PurchaseEnquiry.md#priority)
- [referenceId](PurchaseEnquiry.md#referenceid)
- [status](PurchaseEnquiry.md#status)
- [vaultFolderId](PurchaseEnquiry.md#vaultfolderid)
- [fields](PurchaseEnquiry.md#fields)
- [runtime](PurchaseEnquiry.md#runtime)
- [typeName](PurchaseEnquiry.md#typename)

### Methods

- [clone](PurchaseEnquiry.md#clone)
- [equals](PurchaseEnquiry.md#equals)
- [fromBinary](PurchaseEnquiry.md#frombinary)
- [fromJson](PurchaseEnquiry.md#fromjson)
- [fromJsonString](PurchaseEnquiry.md#fromjsonstring)
- [getType](PurchaseEnquiry.md#gettype)
- [toBinary](PurchaseEnquiry.md#tobinary)
- [toJSON](PurchaseEnquiry.md#tojson)
- [toJson](PurchaseEnquiry.md#tojson-1)
- [toJsonString](PurchaseEnquiry.md#tojsonstring)
- [equals](PurchaseEnquiry.md#equals-1)
- [fromBinary](PurchaseEnquiry.md#frombinary-1)
- [fromJson](PurchaseEnquiry.md#fromjson-1)
- [fromJsonString](PurchaseEnquiry.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseEnquiry**(`data?`): [`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseEnquiry`](PurchaseEnquiry.md)\> |

#### Returns

[`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Overrides

Message\&lt;PurchaseEnquiry\&gt;.constructor

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:617](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L617)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:530](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L530)

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

[src/purchases_enquiries.scailo_pb.ts:556](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L556)

___

### description

• **description**: `string` = `""`

The description of the purchase enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:600](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L600)

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

[src/purchases_enquiries.scailo_pb.ts:514](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L514)

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

[src/purchases_enquiries.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L586)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:615](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L615)

___

### list

• **list**: [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)[] = `[]`

The list of associated purchase enquiry items

**`Generated`**

from field: repeated Scailo.PurchaseEnquiryItem list = 20;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:607](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L607)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L546)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L522)

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:593](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L593)

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

[src/purchases_enquiries.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L576)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L538)

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

[src/purchases_enquiries.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L566)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:624](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L624)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:622](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L622)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseEnquiry"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:623](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L623)

## Methods

### clone

▸ **clone**(): [`PurchaseEnquiry`](PurchaseEnquiry.md)

Create a deep copy.

#### Returns

[`PurchaseEnquiry`](PurchaseEnquiry.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseEnquiry`](PurchaseEnquiry.md) \| `PlainMessage`\<[`PurchaseEnquiry`](PurchaseEnquiry.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseEnquiry`](PurchaseEnquiry.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseEnquiry`](PurchaseEnquiry.md)\>

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
| `a` | `undefined` \| [`PurchaseEnquiry`](PurchaseEnquiry.md) \| `PlainMessage`\<[`PurchaseEnquiry`](PurchaseEnquiry.md)\> |
| `b` | `undefined` \| [`PurchaseEnquiry`](PurchaseEnquiry.md) \| `PlainMessage`\<[`PurchaseEnquiry`](PurchaseEnquiry.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:652](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L652)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:640](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L640)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L644)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiry`](PurchaseEnquiry.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_enquiries.scailo_pb.ts#L648)

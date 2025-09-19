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

[src/purchases_enquiries.scailo_pb.ts:506](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L506)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L434)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this purchase enquiry was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:455](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L455)

___

### description

• **description**: `string` = `""`

The description of the purchase enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L490)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L420)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:476](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L476)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:504](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L504)

___

### list

• **list**: [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)[] = `[]`

The list of associated purchase enquiry items

**`Generated`**

from field: repeated Scailo.PurchaseEnquiryItem list = 20;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:497](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L497)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this purchase enquiry

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L448)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this purchase enquiry

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L427)

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:483](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L483)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase enquiry

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:469](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L469)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase enquiry

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:441](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L441)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L462)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L513)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:511](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L511)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseEnquiry"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L512)

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

[src/purchases_enquiries.scailo_pb.ts:541](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L541)

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

[src/purchases_enquiries.scailo_pb.ts:529](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L529)

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

[src/purchases_enquiries.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L533)

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

[src/purchases_enquiries.scailo_pb.ts:537](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_enquiries.scailo_pb.ts#L537)

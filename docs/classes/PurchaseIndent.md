[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseIndent

# Class: PurchaseIndent

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.PurchaseIndent

## Hierarchy

- `Message`\<[`PurchaseIndent`](PurchaseIndent.md)\>

  ↳ **`PurchaseIndent`**

## Table of contents

### Constructors

- [constructor](PurchaseIndent.md#constructor)

### Properties

- [approvalMetadata](PurchaseIndent.md#approvalmetadata)
- [completedOn](PurchaseIndent.md#completedon)
- [consigneeLocationId](PurchaseIndent.md#consigneelocationid)
- [entityUuid](PurchaseIndent.md#entityuuid)
- [finalRefNumber](PurchaseIndent.md#finalrefnumber)
- [formData](PurchaseIndent.md#formdata)
- [list](PurchaseIndent.md#list)
- [logs](PurchaseIndent.md#logs)
- [metadata](PurchaseIndent.md#metadata)
- [referenceId](PurchaseIndent.md#referenceid)
- [status](PurchaseIndent.md#status)
- [vaultFolderId](PurchaseIndent.md#vaultfolderid)
- [fields](PurchaseIndent.md#fields)
- [runtime](PurchaseIndent.md#runtime)
- [typeName](PurchaseIndent.md#typename)

### Methods

- [clone](PurchaseIndent.md#clone)
- [equals](PurchaseIndent.md#equals)
- [fromBinary](PurchaseIndent.md#frombinary)
- [fromJson](PurchaseIndent.md#fromjson)
- [fromJsonString](PurchaseIndent.md#fromjsonstring)
- [getType](PurchaseIndent.md#gettype)
- [toBinary](PurchaseIndent.md#tobinary)
- [toJSON](PurchaseIndent.md#tojson)
- [toJson](PurchaseIndent.md#tojson-1)
- [toJsonString](PurchaseIndent.md#tojsonstring)
- [equals](PurchaseIndent.md#equals-1)
- [fromBinary](PurchaseIndent.md#frombinary-1)
- [fromJson](PurchaseIndent.md#fromjson-1)
- [fromJsonString](PurchaseIndent.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseIndent**(`data?`): [`PurchaseIndent`](PurchaseIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseIndent`](PurchaseIndent.md)\> |

#### Returns

[`PurchaseIndent`](PurchaseIndent.md)

#### Overrides

Message\&lt;PurchaseIndent\&gt;.constructor

#### Defined in

[src/purchases_indents.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L525)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/purchases_indents.scailo_pb.ts:460](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L460)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this purchase indent was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/purchases_indents.scailo_pb.ts:481](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L481)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 12;

#### Defined in

[src/purchases_indents.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L509)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/purchases_indents.scailo_pb.ts:446](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L446)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/purchases_indents.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L502)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/purchases_indents.scailo_pb.ts:523](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L523)

___

### list

• **list**: [`PurchaseIndentItem`](PurchaseIndentItem.md)[] = `[]`

The list of associated purchase indent items

**`Generated`**

from field: repeated Scailo.PurchaseIndentItem list = 20;

#### Defined in

[src/purchases_indents.scailo_pb.ts:516](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L516)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this purchase indent

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/purchases_indents.scailo_pb.ts:474](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L474)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this purchase indent

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/purchases_indents.scailo_pb.ts:453](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L453)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_indents.scailo_pb.ts:495](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L495)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase indent

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/purchases_indents.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L467)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/purchases_indents.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L488)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L532)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents.scailo_pb.ts:530](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L530)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseIndent"``

#### Defined in

[src/purchases_indents.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L531)

## Methods

### clone

▸ **clone**(): [`PurchaseIndent`](PurchaseIndent.md)

Create a deep copy.

#### Returns

[`PurchaseIndent`](PurchaseIndent.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseIndent`](PurchaseIndent.md) \| `PlainMessage`\<[`PurchaseIndent`](PurchaseIndent.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseIndent`](PurchaseIndent.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseIndent`](PurchaseIndent.md)\>

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
| `a` | `undefined` \| [`PurchaseIndent`](PurchaseIndent.md) \| `PlainMessage`\<[`PurchaseIndent`](PurchaseIndent.md)\> |
| `b` | `undefined` \| [`PurchaseIndent`](PurchaseIndent.md) \| `PlainMessage`\<[`PurchaseIndent`](PurchaseIndent.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L559)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseIndent`](PurchaseIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseIndent`](PurchaseIndent.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L547)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseIndent`](PurchaseIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndent`](PurchaseIndent.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:551](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L551)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseIndent`](PurchaseIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndent`](PurchaseIndent.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:555](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L555)

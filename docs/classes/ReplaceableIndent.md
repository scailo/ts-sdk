[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndent

# Class: ReplaceableIndent

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.ReplaceableIndent

## Hierarchy

- `Message`\<[`ReplaceableIndent`](ReplaceableIndent.md)\>

  ↳ **`ReplaceableIndent`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndent.md#constructor)

### Properties

- [approvalMetadata](ReplaceableIndent.md#approvalmetadata)
- [completedOn](ReplaceableIndent.md#completedon)
- [description](ReplaceableIndent.md#description)
- [entityUuid](ReplaceableIndent.md#entityuuid)
- [familyId](ReplaceableIndent.md#familyid)
- [finalRefNumber](ReplaceableIndent.md#finalrefnumber)
- [formData](ReplaceableIndent.md#formdata)
- [itemHash](ReplaceableIndent.md#itemhash)
- [list](ReplaceableIndent.md#list)
- [locationId](ReplaceableIndent.md#locationid)
- [logs](ReplaceableIndent.md#logs)
- [metadata](ReplaceableIndent.md#metadata)
- [referenceId](ReplaceableIndent.md#referenceid)
- [status](ReplaceableIndent.md#status)
- [supervisor](ReplaceableIndent.md#supervisor)
- [vaultFolderId](ReplaceableIndent.md#vaultfolderid)
- [fields](ReplaceableIndent.md#fields)
- [runtime](ReplaceableIndent.md#runtime)
- [typeName](ReplaceableIndent.md#typename)

### Methods

- [clone](ReplaceableIndent.md#clone)
- [equals](ReplaceableIndent.md#equals)
- [fromBinary](ReplaceableIndent.md#frombinary)
- [fromJson](ReplaceableIndent.md#fromjson)
- [fromJsonString](ReplaceableIndent.md#fromjsonstring)
- [getType](ReplaceableIndent.md#gettype)
- [toBinary](ReplaceableIndent.md#tobinary)
- [toJSON](ReplaceableIndent.md#tojson)
- [toJson](ReplaceableIndent.md#tojson-1)
- [toJsonString](ReplaceableIndent.md#tojsonstring)
- [equals](ReplaceableIndent.md#equals-1)
- [fromBinary](ReplaceableIndent.md#frombinary-1)
- [fromJson](ReplaceableIndent.md#fromjson-1)
- [fromJsonString](ReplaceableIndent.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndent**(`data?`): [`ReplaceableIndent`](ReplaceableIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndent`](ReplaceableIndent.md)\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Overrides

Message\&lt;ReplaceableIndent\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:601](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L601)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:508](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L508)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this replaceable indent was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:529](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L529)

___

### description

• **description**: `string` = `""`

The description of the replaceable indent

**`Generated`**

from field: string description = 16;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:585](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L585)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:494](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L494)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 14;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:571](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L571)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:550](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L550)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 40;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L599)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 15;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:578](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L578)

___

### list

• **list**: [`ReplaceableIndentItem`](ReplaceableIndentItem.md)[] = `[]`

The list of associated replaceable indent items

**`Generated`**

from field: repeated Scailo.ReplaceableIndentItem list = 30;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:592](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L592)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 12;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:557](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L557)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this replaceable indent

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L522)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this replaceable indent

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:501](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L501)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the replaceable indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:543](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L543)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this replaceable indent

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:515](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L515)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 13;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:564](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L564)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:536](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L536)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:608](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L608)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L606)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndent"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:607](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L607)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndent`](ReplaceableIndent.md)

Create a deep copy.

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndent`](ReplaceableIndent.md) \| `PlainMessage`\<[`ReplaceableIndent`](ReplaceableIndent.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndent`](ReplaceableIndent.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndent`](ReplaceableIndent.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndent`](ReplaceableIndent.md) \| `PlainMessage`\<[`ReplaceableIndent`](ReplaceableIndent.md)\> |
| `b` | `undefined` \| [`ReplaceableIndent`](ReplaceableIndent.md) \| `PlainMessage`\<[`ReplaceableIndent`](ReplaceableIndent.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:639](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L639)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L627)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:631](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L631)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:635](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L635)

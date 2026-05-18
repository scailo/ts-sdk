[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Vendor

# Class: Vendor

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Vendor

## Hierarchy

- `Message`\<[`Vendor`](Vendor.md)\>

  ↳ **`Vendor`**

## Table of contents

### Constructors

- [constructor](Vendor.md#constructor)

### Properties

- [approvalMetadata](Vendor.md#approvalmetadata)
- [code](Vendor.md#code)
- [email](Vendor.md#email)
- [entityUuid](Vendor.md#entityuuid)
- [formData](Vendor.md#formdata)
- [logs](Vendor.md#logs)
- [metadata](Vendor.md#metadata)
- [name](Vendor.md#name)
- [phone](Vendor.md#phone)
- [status](Vendor.md#status)
- [vaultFolderId](Vendor.md#vaultfolderid)
- [fields](Vendor.md#fields)
- [runtime](Vendor.md#runtime)
- [typeName](Vendor.md#typename)

### Methods

- [clone](Vendor.md#clone)
- [equals](Vendor.md#equals)
- [fromBinary](Vendor.md#frombinary)
- [fromJson](Vendor.md#fromjson)
- [fromJsonString](Vendor.md#fromjsonstring)
- [getType](Vendor.md#gettype)
- [toBinary](Vendor.md#tobinary)
- [toJSON](Vendor.md#tojson)
- [toJson](Vendor.md#tojson-1)
- [toJsonString](Vendor.md#tojsonstring)
- [equals](Vendor.md#equals-1)
- [fromBinary](Vendor.md#frombinary-1)
- [fromJson](Vendor.md#fromjson-1)
- [fromJsonString](Vendor.md#fromjsonstring-1)

## Constructors

### constructor

• **new Vendor**(`data?`): [`Vendor`](Vendor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Vendor`](Vendor.md)\> |

#### Returns

[`Vendor`](Vendor.md)

#### Overrides

Message\&lt;Vendor\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:660](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L660)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/vendors.scailo_pb.ts:597](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L597)

___

### code

• **code**: `string` = `""`

The unique code by which the vendor is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/vendors.scailo_pb.ts:637](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L637)

___

### email

• **email**: `string` = `""`

The primary email of the vendor

**`Generated`**

from field: string email = 12;

#### Defined in

[src/vendors.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L644)

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

[src/vendors.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L581)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/vendors.scailo_pb.ts:658](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L658)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/vendors.scailo_pb.ts:613](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L613)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vendors.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L589)

___

### name

• **name**: `string` = `""`

The name of the vendor

**`Generated`**

from field: string name = 10;

#### Defined in

[src/vendors.scailo_pb.ts:630](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L630)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the vendor

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/vendors.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L651)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/vendors.scailo_pb.ts:605](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L605)

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

[src/vendors.scailo_pb.ts:623](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L623)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:667](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L667)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L665)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Vendor"``

#### Defined in

[src/vendors.scailo_pb.ts:666](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L666)

## Methods

### clone

▸ **clone**(): [`Vendor`](Vendor.md)

Create a deep copy.

#### Returns

[`Vendor`](Vendor.md)

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
| `other` | `undefined` \| ``null`` \| [`Vendor`](Vendor.md) \| `PlainMessage`\<[`Vendor`](Vendor.md)\> |

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

▸ **getType**(): `MessageType`\<[`Vendor`](Vendor.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Vendor`](Vendor.md)\>

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
| `a` | `undefined` \| [`Vendor`](Vendor.md) \| `PlainMessage`\<[`Vendor`](Vendor.md)\> |
| `b` | `undefined` \| [`Vendor`](Vendor.md) \| `PlainMessage`\<[`Vendor`](Vendor.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:693](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L693)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Vendor`](Vendor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Vendor`](Vendor.md)

#### Defined in

[src/vendors.scailo_pb.ts:681](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L681)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Vendor`](Vendor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Vendor`](Vendor.md)

#### Defined in

[src/vendors.scailo_pb.ts:685](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L685)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Vendor`](Vendor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Vendor`](Vendor.md)

#### Defined in

[src/vendors.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L689)

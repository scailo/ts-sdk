[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectContact

# Class: ProjectContact

Describes the parameters that constitute a project contact

**`Generated`**

from message Scailo.ProjectContact

## Hierarchy

- `Message`\<[`ProjectContact`](ProjectContact.md)\>

  ↳ **`ProjectContact`**

## Table of contents

### Constructors

- [constructor](ProjectContact.md#constructor)

### Properties

- [approvalMetadata](ProjectContact.md#approvalmetadata)
- [employeeId](ProjectContact.md#employeeid)
- [employeeUuid](ProjectContact.md#employeeuuid)
- [entityUuid](ProjectContact.md#entityuuid)
- [metadata](ProjectContact.md#metadata)
- [needApproval](ProjectContact.md#needapproval)
- [projectId](ProjectContact.md#projectid)
- [userComment](ProjectContact.md#usercomment)
- [fields](ProjectContact.md#fields)
- [runtime](ProjectContact.md#runtime)
- [typeName](ProjectContact.md#typename)

### Methods

- [clone](ProjectContact.md#clone)
- [equals](ProjectContact.md#equals)
- [fromBinary](ProjectContact.md#frombinary)
- [fromJson](ProjectContact.md#fromjson)
- [fromJsonString](ProjectContact.md#fromjsonstring)
- [getType](ProjectContact.md#gettype)
- [toBinary](ProjectContact.md#tobinary)
- [toJSON](ProjectContact.md#tojson)
- [toJson](ProjectContact.md#tojson-1)
- [toJsonString](ProjectContact.md#tojsonstring)
- [equals](ProjectContact.md#equals-1)
- [fromBinary](ProjectContact.md#frombinary-1)
- [fromJson](ProjectContact.md#fromjson-1)
- [fromJsonString](ProjectContact.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectContact**(`data?`): [`ProjectContact`](ProjectContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectContact`](ProjectContact.md)\> |

#### Returns

[`ProjectContact`](ProjectContact.md)

#### Overrides

Message\&lt;ProjectContact\&gt;.constructor

#### Defined in

[src/projects.scailo_pb.ts:1822](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1822)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/projects.scailo_pb.ts:1784](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1784)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the employee ID

**`Generated`**

from field: uint64 employee_id = 11;

#### Defined in

[src/projects.scailo_pb.ts:1813](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1813)

___

### employeeUuid

• **employeeUuid**: `string` = `""`

Stores the UUID of the employee

**`Generated`**

from field: string employee_uuid = 211;

#### Defined in

[src/projects.scailo_pb.ts:1820](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1820)

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

[src/projects.scailo_pb.ts:1768](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1768)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/projects.scailo_pb.ts:1776](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1776)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/projects.scailo_pb.ts:1792](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1792)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

Stores the project ID

**`Generated`**

from field: uint64 project_id = 10;

#### Defined in

[src/projects.scailo_pb.ts:1806](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1806)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/projects.scailo_pb.ts:1799](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1799)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects.scailo_pb.ts:1829](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1829)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects.scailo_pb.ts:1827](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1827)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectContact"``

#### Defined in

[src/projects.scailo_pb.ts:1828](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1828)

## Methods

### clone

▸ **clone**(): [`ProjectContact`](ProjectContact.md)

Create a deep copy.

#### Returns

[`ProjectContact`](ProjectContact.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectContact`](ProjectContact.md) \| `PlainMessage`\<[`ProjectContact`](ProjectContact.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectContact`](ProjectContact.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectContact`](ProjectContact.md)\>

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
| `a` | `undefined` \| [`ProjectContact`](ProjectContact.md) \| `PlainMessage`\<[`ProjectContact`](ProjectContact.md)\> |
| `b` | `undefined` \| [`ProjectContact`](ProjectContact.md) \| `PlainMessage`\<[`ProjectContact`](ProjectContact.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects.scailo_pb.ts:1852](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1852)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectContact`](ProjectContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectContact`](ProjectContact.md)

#### Defined in

[src/projects.scailo_pb.ts:1840](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1840)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectContact`](ProjectContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectContact`](ProjectContact.md)

#### Defined in

[src/projects.scailo_pb.ts:1844](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1844)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectContact`](ProjectContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectContact`](ProjectContact.md)

#### Defined in

[src/projects.scailo_pb.ts:1848](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/projects.scailo_pb.ts#L1848)

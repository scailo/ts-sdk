[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftGroup

# Class: ShiftGroup

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.ShiftGroup

## Hierarchy

- `Message`\<[`ShiftGroup`](ShiftGroup.md)\>

  ↳ **`ShiftGroup`**

## Table of contents

### Constructors

- [constructor](ShiftGroup.md#constructor)

### Properties

- [approvalMetadata](ShiftGroup.md#approvalmetadata)
- [code](ShiftGroup.md#code)
- [completedOn](ShiftGroup.md#completedon)
- [description](ShiftGroup.md#description)
- [entityUuid](ShiftGroup.md#entityuuid)
- [list](ShiftGroup.md#list)
- [logs](ShiftGroup.md#logs)
- [metadata](ShiftGroup.md#metadata)
- [name](ShiftGroup.md#name)
- [status](ShiftGroup.md#status)
- [vaultFolderId](ShiftGroup.md#vaultfolderid)
- [fields](ShiftGroup.md#fields)
- [runtime](ShiftGroup.md#runtime)
- [typeName](ShiftGroup.md#typename)

### Methods

- [clone](ShiftGroup.md#clone)
- [equals](ShiftGroup.md#equals)
- [fromBinary](ShiftGroup.md#frombinary)
- [fromJson](ShiftGroup.md#fromjson)
- [fromJsonString](ShiftGroup.md#fromjsonstring)
- [getType](ShiftGroup.md#gettype)
- [toBinary](ShiftGroup.md#tobinary)
- [toJSON](ShiftGroup.md#tojson)
- [toJson](ShiftGroup.md#tojson-1)
- [toJsonString](ShiftGroup.md#tojsonstring)
- [equals](ShiftGroup.md#equals-1)
- [fromBinary](ShiftGroup.md#frombinary-1)
- [fromJson](ShiftGroup.md#fromjson-1)
- [fromJsonString](ShiftGroup.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftGroup**(`data?`): [`ShiftGroup`](ShiftGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftGroup`](ShiftGroup.md)\> |

#### Returns

[`ShiftGroup`](ShiftGroup.md)

#### Overrides

Message\&lt;ShiftGroup\&gt;.constructor

#### Defined in

[src/shifts_groups.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L427)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/shifts_groups.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L361)

___

### code

• **code**: `string` = `""`

The shift group code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/shifts_groups.scailo_pb.ts:411](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L411)

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

[src/shifts_groups.scailo_pb.ts:387](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L387)

___

### description

• **description**: `string` = `""`

The description of the shift group

**`Generated`**

from field: string description = 12;

#### Defined in

[src/shifts_groups.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L418)

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

[src/shifts_groups.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L345)

___

### list

• **list**: [`ShiftGroupShift`](ShiftGroupShift.md)[] = `[]`

The list of associated shift group shifts

**`Generated`**

from field: repeated Scailo.ShiftGroupShift list = 20;

#### Defined in

[src/shifts_groups.scailo_pb.ts:425](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L425)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/shifts_groups.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L377)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/shifts_groups.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L353)

___

### name

• **name**: `string` = `""`

The name of the shift group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/shifts_groups.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L404)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/shifts_groups.scailo_pb.ts:369](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L369)

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

[src/shifts_groups.scailo_pb.ts:397](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L397)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L434)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups.scailo_pb.ts:432](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L432)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftGroup"``

#### Defined in

[src/shifts_groups.scailo_pb.ts:433](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L433)

## Methods

### clone

▸ **clone**(): [`ShiftGroup`](ShiftGroup.md)

Create a deep copy.

#### Returns

[`ShiftGroup`](ShiftGroup.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftGroup`](ShiftGroup.md) \| `PlainMessage`\<[`ShiftGroup`](ShiftGroup.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftGroup`](ShiftGroup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftGroup`](ShiftGroup.md)\>

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
| `a` | `undefined` \| [`ShiftGroup`](ShiftGroup.md) \| `PlainMessage`\<[`ShiftGroup`](ShiftGroup.md)\> |
| `b` | `undefined` \| [`ShiftGroup`](ShiftGroup.md) \| `PlainMessage`\<[`ShiftGroup`](ShiftGroup.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups.scailo_pb.ts:460](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L460)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftGroup`](ShiftGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftGroup`](ShiftGroup.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L448)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftGroup`](ShiftGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftGroup`](ShiftGroup.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:452](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L452)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftGroup`](ShiftGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftGroup`](ShiftGroup.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:456](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/shifts_groups.scailo_pb.ts#L456)

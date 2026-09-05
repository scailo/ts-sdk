[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroup

# Class: QCGroup

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.QCGroup

## Hierarchy

- `Message`\<[`QCGroup`](QCGroup.md)\>

  ↳ **`QCGroup`**

## Table of contents

### Constructors

- [constructor](QCGroup.md#constructor)

### Properties

- [approvalMetadata](QCGroup.md#approvalmetadata)
- [code](QCGroup.md#code)
- [completedOn](QCGroup.md#completedon)
- [description](QCGroup.md#description)
- [entityUuid](QCGroup.md#entityuuid)
- [formData](QCGroup.md#formdata)
- [list](QCGroup.md#list)
- [logs](QCGroup.md#logs)
- [metadata](QCGroup.md#metadata)
- [name](QCGroup.md#name)
- [status](QCGroup.md#status)
- [vaultFolderId](QCGroup.md#vaultfolderid)
- [fields](QCGroup.md#fields)
- [runtime](QCGroup.md#runtime)
- [typeName](QCGroup.md#typename)

### Methods

- [clone](QCGroup.md#clone)
- [equals](QCGroup.md#equals)
- [fromBinary](QCGroup.md#frombinary)
- [fromJson](QCGroup.md#fromjson)
- [fromJsonString](QCGroup.md#fromjsonstring)
- [getType](QCGroup.md#gettype)
- [toBinary](QCGroup.md#tobinary)
- [toJSON](QCGroup.md#tojson)
- [toJson](QCGroup.md#tojson-1)
- [toJsonString](QCGroup.md#tojsonstring)
- [equals](QCGroup.md#equals-1)
- [fromBinary](QCGroup.md#frombinary-1)
- [fromJson](QCGroup.md#fromjson-1)
- [fromJsonString](QCGroup.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroup**(`data?`): [`QCGroup`](QCGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroup`](QCGroup.md)\> |

#### Returns

[`QCGroup`](QCGroup.md)

#### Overrides

Message\&lt;QCGroup\&gt;.constructor

#### Defined in

[src/qc_groups.scailo_pb.ts:621](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L621)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/qc_groups.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L547)

___

### code

• **code**: `string` = `""`

The qc group code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/qc_groups.scailo_pb.ts:597](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L597)

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

[src/qc_groups.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L573)

___

### description

• **description**: `string` = `""`

The description of the qc group

**`Generated`**

from field: string description = 13;

#### Defined in

[src/qc_groups.scailo_pb.ts:604](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L604)

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

[src/qc_groups.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L531)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

**`Description`**

Collection of organization-specific dynamic data.

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

[src/qc_groups.scailo_pb.ts:619](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L619)

___

### list

• **list**: [`QCGroupItem`](QCGroupItem.md)[] = `[]`

The list of associated qc group params

**`Generated`**

from field: repeated Scailo.QCGroupItem list = 20;

#### Defined in

[src/qc_groups.scailo_pb.ts:611](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L611)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/qc_groups.scailo_pb.ts:563](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L563)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/qc_groups.scailo_pb.ts:539](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L539)

___

### name

• **name**: `string` = `""`

The name of the qc group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/qc_groups.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L590)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/qc_groups.scailo_pb.ts:555](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L555)

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

[src/qc_groups.scailo_pb.ts:583](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L583)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups.scailo_pb.ts:628](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L628)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L626)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroup"``

#### Defined in

[src/qc_groups.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L627)

## Methods

### clone

▸ **clone**(): [`QCGroup`](QCGroup.md)

Create a deep copy.

#### Returns

[`QCGroup`](QCGroup.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroup`](QCGroup.md) \| `PlainMessage`\<[`QCGroup`](QCGroup.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroup`](QCGroup.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroup`](QCGroup.md)\>

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
| `a` | `undefined` \| [`QCGroup`](QCGroup.md) \| `PlainMessage`\<[`QCGroup`](QCGroup.md)\> |
| `b` | `undefined` \| [`QCGroup`](QCGroup.md) \| `PlainMessage`\<[`QCGroup`](QCGroup.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L655)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroup`](QCGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroup`](QCGroup.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:643](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L643)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroup`](QCGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroup`](QCGroup.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L647)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroup`](QCGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroup`](QCGroup.md)

#### Defined in

[src/qc_groups.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_groups.scailo_pb.ts#L651)

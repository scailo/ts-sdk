[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCHub

# Class: QCHub

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.QCHub

## Hierarchy

- `Message`\<[`QCHub`](QCHub.md)\>

  ↳ **`QCHub`**

## Table of contents

### Constructors

- [constructor](QCHub.md#constructor)

### Properties

- [approvalMetadata](QCHub.md#approvalmetadata)
- [code](QCHub.md#code)
- [description](QCHub.md#description)
- [entityUuid](QCHub.md#entityuuid)
- [inchargeUsername](QCHub.md#inchargeusername)
- [locationId](QCHub.md#locationid)
- [logs](QCHub.md#logs)
- [metadata](QCHub.md#metadata)
- [name](QCHub.md#name)
- [phone](QCHub.md#phone)
- [status](QCHub.md#status)
- [fields](QCHub.md#fields)
- [runtime](QCHub.md#runtime)
- [typeName](QCHub.md#typename)

### Methods

- [clone](QCHub.md#clone)
- [equals](QCHub.md#equals)
- [fromBinary](QCHub.md#frombinary)
- [fromJson](QCHub.md#fromjson)
- [fromJsonString](QCHub.md#fromjsonstring)
- [getType](QCHub.md#gettype)
- [toBinary](QCHub.md#tobinary)
- [toJSON](QCHub.md#tojson)
- [toJson](QCHub.md#tojson-1)
- [toJsonString](QCHub.md#tojsonstring)
- [equals](QCHub.md#equals-1)
- [fromBinary](QCHub.md#frombinary-1)
- [fromJson](QCHub.md#fromjson-1)
- [fromJsonString](QCHub.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCHub**(`data?`): [`QCHub`](QCHub.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCHub`](QCHub.md)\> |

#### Returns

[`QCHub`](QCHub.md)

#### Overrides

Message\&lt;QCHub\&gt;.constructor

#### Defined in

[src/qc_hubs.scailo_pb.ts:365](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L365)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

QCHubs the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/qc_hubs.scailo_pb.ts:307](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L307)

___

### code

• **code**: `string` = `""`

The unique code by which the qc hub is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/qc_hubs.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L342)

___

### description

• **description**: `string` = `""`

The description of the qc hub

**`Generated`**

from field: string description = 12;

#### Defined in

[src/qc_hubs.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L349)

___

### entityUuid

• **entityUuid**: `string` = `""`

QCHubs a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/qc_hubs.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L293)

___

### inchargeUsername

• **inchargeUsername**: `string` = `""`

The username of the incharge

**`Generated`**

from field: string incharge_username = 13;

#### Defined in

[src/qc_hubs.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L356)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 9;

#### Defined in

[src/qc_hubs.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L328)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

QCHubs the logs of every operation performed on this qc hub

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/qc_hubs.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L321)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

QCHubs the metadata of this qc hub

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/qc_hubs.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L300)

___

### name

• **name**: `string` = `""`

The name of the qc hub

**`Generated`**

from field: string name = 10;

#### Defined in

[src/qc_hubs.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L335)

___

### phone

• **phone**: `string` = `""`

The contact number of the qc hub

**`Generated`**

from field: string phone = 14;

#### Defined in

[src/qc_hubs.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L363)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this qc hub

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/qc_hubs.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L314)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_hubs.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L372)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_hubs.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L370)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCHub"``

#### Defined in

[src/qc_hubs.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L371)

## Methods

### clone

▸ **clone**(): [`QCHub`](QCHub.md)

Create a deep copy.

#### Returns

[`QCHub`](QCHub.md)

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
| `other` | `undefined` \| ``null`` \| [`QCHub`](QCHub.md) \| `PlainMessage`\<[`QCHub`](QCHub.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCHub`](QCHub.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCHub`](QCHub.md)\>

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
| `a` | `undefined` \| [`QCHub`](QCHub.md) \| `PlainMessage`\<[`QCHub`](QCHub.md)\> |
| `b` | `undefined` \| [`QCHub`](QCHub.md) \| `PlainMessage`\<[`QCHub`](QCHub.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_hubs.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L398)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCHub`](QCHub.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCHub`](QCHub.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L386)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCHub`](QCHub.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHub`](QCHub.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:390](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L390)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCHub`](QCHub.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCHub`](QCHub.md)

#### Defined in

[src/qc_hubs.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_hubs.scailo_pb.ts#L394)

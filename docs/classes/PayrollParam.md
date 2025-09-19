[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollParam

# Class: PayrollParam

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.PayrollParam

## Hierarchy

- `Message`\<[`PayrollParam`](PayrollParam.md)\>

  ↳ **`PayrollParam`**

## Table of contents

### Constructors

- [constructor](PayrollParam.md#constructor)

### Properties

- [approvalMetadata](PayrollParam.md#approvalmetadata)
- [code](PayrollParam.md#code)
- [completedOn](PayrollParam.md#completedon)
- [description](PayrollParam.md#description)
- [entityUuid](PayrollParam.md#entityuuid)
- [logs](PayrollParam.md#logs)
- [metadata](PayrollParam.md#metadata)
- [name](PayrollParam.md#name)
- [status](PayrollParam.md#status)
- [fields](PayrollParam.md#fields)
- [runtime](PayrollParam.md#runtime)
- [typeName](PayrollParam.md#typename)

### Methods

- [clone](PayrollParam.md#clone)
- [equals](PayrollParam.md#equals)
- [fromBinary](PayrollParam.md#frombinary)
- [fromJson](PayrollParam.md#fromjson)
- [fromJsonString](PayrollParam.md#fromjsonstring)
- [getType](PayrollParam.md#gettype)
- [toBinary](PayrollParam.md#tobinary)
- [toJSON](PayrollParam.md#tojson)
- [toJson](PayrollParam.md#tojson-1)
- [toJsonString](PayrollParam.md#tojsonstring)
- [equals](PayrollParam.md#equals-1)
- [fromBinary](PayrollParam.md#frombinary-1)
- [fromJson](PayrollParam.md#fromjson-1)
- [fromJsonString](PayrollParam.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollParam**(`data?`): [`PayrollParam`](PayrollParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollParam`](PayrollParam.md)\> |

#### Returns

[`PayrollParam`](PayrollParam.md)

#### Overrides

Message\&lt;PayrollParam\&gt;.constructor

#### Defined in

[src/payroll_params.scailo_pb.ts:319](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L319)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/payroll_params.scailo_pb.ts:275](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L275)

___

### code

• **code**: `string` = `""`

The payroll param code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/payroll_params.scailo_pb.ts:310](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L310)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this payroll param was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/payroll_params.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L296)

___

### description

• **description**: `string` = `""`

The description of the payroll param

**`Generated`**

from field: string description = 12;

#### Defined in

[src/payroll_params.scailo_pb.ts:317](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L317)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/payroll_params.scailo_pb.ts:261](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L261)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this payroll param

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/payroll_params.scailo_pb.ts:289](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L289)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this payroll param

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/payroll_params.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L268)

___

### name

• **name**: `string` = `""`

The name of the payroll param

**`Generated`**

from field: string name = 10;

#### Defined in

[src/payroll_params.scailo_pb.ts:303](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L303)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this payroll param

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/payroll_params.scailo_pb.ts:282](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L282)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/payroll_params.scailo_pb.ts:326](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L326)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/payroll_params.scailo_pb.ts:324](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L324)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollParam"``

#### Defined in

[src/payroll_params.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L325)

## Methods

### clone

▸ **clone**(): [`PayrollParam`](PayrollParam.md)

Create a deep copy.

#### Returns

[`PayrollParam`](PayrollParam.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollParam`](PayrollParam.md) \| `PlainMessage`\<[`PayrollParam`](PayrollParam.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollParam`](PayrollParam.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollParam`](PayrollParam.md)\>

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
| `a` | `undefined` \| [`PayrollParam`](PayrollParam.md) \| `PlainMessage`\<[`PayrollParam`](PayrollParam.md)\> |
| `b` | `undefined` \| [`PayrollParam`](PayrollParam.md) \| `PlainMessage`\<[`PayrollParam`](PayrollParam.md)\> |

#### Returns

`boolean`

#### Defined in

[src/payroll_params.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L350)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollParam`](PayrollParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollParam`](PayrollParam.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:338](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L338)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollParam`](PayrollParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParam`](PayrollParam.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L342)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollParam`](PayrollParam.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParam`](PayrollParam.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:346](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/payroll_params.scailo_pb.ts#L346)
